import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './header/user/user.component';
import { AsideComponent } from './content/aside/aside.component';
import { ContentComponent } from './content/content.component';
import { PostsComponent } from './content/posts/posts.component';
import { ConnectionsComponent } from './content/connections/connections.component';
import { AboutComponent } from './content/about/about.component';
import { PostComponent } from './content/posts/post/post.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './content/nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes:Routes =[
  {path:'' , component:HomeComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'connections' , component:ConnectionsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    AsideComponent,
    ContentComponent,
    AsideComponent,
    PostsComponent,
    ConnectionsComponent,
    AboutComponent,
    PostComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
