import { Component,ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private appService: AppService){
  };

  ngOnInit(){
  	this.activatedRoute.url.subscribe(url =>{
			if (!this.appService.hasToken()){
				this.router.navigate(['/login']);
			}
	});
  }
}