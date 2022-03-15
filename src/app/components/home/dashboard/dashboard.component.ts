import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { ShowPosts } from 'src/app/models/post';
import { Router } from '@angular/router';
import { FriendRequestService } from 'src/app/services/friend-request.service';
import { ResponseFriendRequest } from 'src/app/models/friendRequest';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showAddPostForm = false;

  showSpinner = true


  constructor(
    private postService: PostService,
    private router: Router,
    private friendRequestService: FriendRequestService
  ) { }


  user = new User()

  showPosts = new ShowPosts()

  allRequests: ResponseFriendRequest

  getUser(event: User){
    this.user = event
  }

  ngOnInit(): void {
    if (!localStorage.getItem('linklove')){
      this.router.navigate(['login'])
    }
    this.postService.getPosts().subscribe(response => {
      this.showPosts = response
      console.log(this.showPosts)
      this.showSpinner = false
    })

    this.friendRequestService.getNumberOfFriendRequest().subscribe(response => {
      this.allRequests = response
    })
  }


  openAddPostForm(){
    this.showAddPostForm = true
  }

  closeAddForm(){
    console.log("F")
    this.showAddPostForm = false
  }

  goFriendPage(){
    this.router.navigate(['friend'])
  }
}
