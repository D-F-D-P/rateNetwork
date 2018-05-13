import { Component,ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit{
  
  notification = null;

  notificationsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private appService: AppService){
  };

  ngOnInit(){
  	this.activatedRoute.url.subscribe(url =>{
			if (!this.appService.hasToken()){
				this.router.navigate(['/login']);
			}
	 });
    this.notificationsSubscription = this.appService.notificationsSubject.subscribe((m)=>{
      this.notification = m;
      setTimeout(()=>{
        this.notification = null;
      },5000);
    });
  }


  ngOnDestroy(){
    this.notificationsSubscription.unsubscribe();
  }
}