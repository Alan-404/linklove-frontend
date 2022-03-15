import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { NgxEditorModule } from 'ngx-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginScreenComponent } from './components/auth/login-screen/login-screen.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';

import { RegisterScreenComponent } from './components/auth/register-screen/register-screen.component';
import { SpinnerComponent } from './components/effect/spinner/spinner.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { AddPostScreenComponent } from './components/home/post/add-post-screen/add-post-screen.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { AboutComponent } from './components/home/user/about/about.component';
import { ShowPostComponent } from './components/home/post/show-post/show-post.component';
import { ShowImageComponent } from './components/home/post/show-image/show-image.component';
import { ShowFriendsComponent } from './components/home/friend/show-friends/show-friends.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginScreenComponent},
  {path: 'register', component: RegisterScreenComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'friend', component: ShowFriendsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    DashboardComponent,
    RegisterScreenComponent,
    SpinnerComponent,
    HeaderComponent,
    AddPostScreenComponent,
    ProfileComponent,
    AboutComponent,
    ShowPostComponent,
    ShowImageComponent,
    ShowFriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEditorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
