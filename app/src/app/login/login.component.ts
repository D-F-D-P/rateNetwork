import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private appService: AppService, private router: Router) { }

  username;
  password;

  ngOnInit() {
  }

  submit(form : NgForm){
    this.appService.login(form.value.username, form.value.password).subscribe((r)=>{
      this.appService.setToken(r.token, r._id);
      this.router.navigate(['/profile'],{ queryParams: {id: this.appService.id} })
    });
  }

}
