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
  
  id = '';
  followers = [];
  following = [];
  name = '';
  section = 'activity';
  rate = 0.0;
  posts = [];

  profileSubscription: Subscription;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
  	this. profileSubscription = this.route.queryParams.subscribe(params=>{
  		this.appService.getProfile(params["id"]).subscribe((response)=>{
        this.section = 'activity';
        debugger;
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
  	})
  }

  removePost(id) {
    console.log(id);
  }

  sharePost(id) {
    console.log(id);
  }

  removeComment(id) {
    console.log(id);
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
