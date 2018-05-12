import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AppService {
  token;
  id;
  suggestedFriendsSubject;
  suggestedFriends;

  constructor(private http: Http) {
  
  }



  hasToken() {
  	if(this.token && this.id){
  		return true
  	}else{
      this.token = localStorage.getItem('token');
     	this.id = localStorage.getItem('id');
  		if (this.token) {
        // var socket = window.getIo()('http://localhost:3000?token=' + this.token);
        // socket.on("activityLog", (m)=>{
        //   console.log('[log] : ',m);
        // });
        // socket.on("notification", (m)=>{
        //   console.log('[notification] : ',m);
        // });
        this.suggestedFriendsSubject = new Subject();
        this.getSuggestedFriends().subscribe((r)=>{
          this.suggestedFriends = r;
          this.suggestedFriendsSubject.next();
        })
      }
      return (this.token && this.id) ? true : false;
  	}
  }

  setToken(token, id) {
  	this.token = token;
    this.id = id;
    localStorage.setItem('token', token);
  	localStorage.setItem('id', id);
  }

  getProfile(id) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.get('/api/profile' + (id ? ('?id='+id) : ''), { headers: headers }).map(res => res.json());
  } 

  getHome() {
  	const headers = new Headers({ 'x-access-token': this.token });
    return this.http.get('/api/home', { headers: headers }).map(res => res.json());
  }  

  getSuggestedFriends() {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.get('/api/suggestedFriends', { headers: headers }).map(res => res.json());
  }  

  login(user_name, password) {
    return this.http.post('/api/login', {user_name, password}).map(res => res.json());
  }

  follow(id) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/follow', {id},{ headers: headers }).map(res => {
      this.getSuggestedFriends().subscribe((r)=>{
        this.suggestedFriends = r;
        this.suggestedFriendsSubject.next();
      })
      return res.json();
    });
  }

  unfollow(id) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/unfollow', {id},{ headers: headers }).map(res => res.json());
  }

  addPost(body) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/post/add', {body},{ headers: headers }).map(res => res.json());
  }

  removePost(id) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/post/remove', {id},{ headers: headers }).map(res => res.json());
  }

  sharePost(id) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/post/share', {id},{ headers: headers }).map(res => res.json());
  }

  ratePost(id, rate) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/post/rate', {id, rate},{ headers: headers }).map(res => res.json());
  }

  unratePost(id) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/post/unrate', {id},{ headers: headers }).map(res => res.json());
  }

  addComment(id,body) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/post/comment', {id,body},{ headers: headers }).map(res => res.json());
  }

  removeComment(id) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/post/comment/remove', {id},{ headers: headers }).map(res => res.json());
  }

}
