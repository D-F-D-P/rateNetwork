import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  token;
  id;

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

  login(user_name, password) {
    return this.http.post('/api/login', {user_name, password}).map(res => res.json());
  }

  removePost(id) {
    const headers = new Headers({ 'x-access-token': this.token });
    return this.http.post('/api/post/remove', {id},{ headers: headers }).map(res => res.json());
  }

}
