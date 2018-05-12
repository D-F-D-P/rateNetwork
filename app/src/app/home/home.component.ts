import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { AppService } from '../app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  suggestedFriends;
  
  id = '';
  name = '';
  posts = [];


  constructor(private appService: AppService) { }

  updateSuggestions() {
    this.suggestedFriends = this.appService.suggestedFriends;
  }

  updateView(){
    this.appService.getHome().subscribe((response)=>{
        this.name = response.name;
        this.id = this.appService.id;
        this.posts = response.posts;
      })
  }

  ngOnInit() {
    this.updateSuggestions();
  	this.appService.suggestedFriendsSubject.subscribe(()=>{
      this.updateSuggestions();
    });
    this.updateView();
  }


  removePost(id) {
    this.appService.removePost(id).subscribe(()=>this.updateView());
  }

  sharePost(id) {
    this.appService.sharePost(id).subscribe(()=>this.updateView());
  }

  addComment(id, body) {
    this.appService.addComment(id, body).subscribe(()=>this.updateView());
  }

  addPost(body) {
    this.appService.addPost(body).subscribe(()=>this.updateView());
  }

  removeComment(id) {
    this.appService.removeComment(id).subscribe(()=>this.updateView());
  }

  
  follow(id) {
    this.appService.follow(id).subscribe(()=>this.updateSuggestions());
  }


  compare(id) {
    if(id == this.id){
      return true;
    }
    return false;
  }


}
