import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AppService } from '../app.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  suggestedFriends;
  
  id = '';
  followers = [];
  following = [];
  name = '';
  section = 'activity';
  rate = 0.0;
  posts = [];

  profileSubscription: Subscription;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  updateSuggestions() {
    this.suggestedFriends = this.appService.suggestedFriends;
  }

  updateView(id){
    this.appService.getProfile(id).subscribe((response)=>{
        this.section = 'activity';
        this.followers = response.followers;
        this.following = response.following;
        this.name = response.name;
        this.id = this.appService.id;
        let i = 0;
        this.posts = response.posts;
        this.rate = response.posts.reduce((aggr, cur)=>{
          return aggr + cur.rates.reduce((aggr, cur)=>{
            i++;
            return aggr + cur.value;
          },0)
        },0) / i;
      })
  }

  ngOnInit() {
    this.updateSuggestions();
    this.appService.suggestedFriendsSubject.subscribe(()=>{
      this.updateSuggestions();
    });
  	this. profileSubscription = this.route.queryParams.subscribe(params=>{
      this.updateView(params["id"]);
    })
  }

  removePost(id) {
    this.appService.removePost(id).subscribe(()=>this.updateView(this.id));
  }

  sharePost(id) {
    this.appService.sharePost(id).subscribe(()=>this.updateView(this.id));
  }

  addComment(id, body) {
    this.appService.addComment(id, body).subscribe(()=>this.updateView(this.id));
  }

  addPost(body) {
    this.appService.addPost(body).subscribe(()=>this.updateView(this.id));
  }

  removeComment(id) {
    this.appService.removeComment(id).subscribe(()=>this.updateView(this.id));
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

  ngOnDestroy(){
  	this.profileSubscription.unsubscribe();
  }

}
