import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { ResponsePosts, ShowPosts, Post } from 'src/app/models/post';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private postService: PostService
  ) { }

  currentChoose = 1;

  user = new User()

  users = new Array<User>()

  allPosts = new Array<Post>()

  showPosts = new ShowPosts()

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.postService.getPostsOfUser(params.id).subscribe(response => {
        this.showPosts.posts = response.posts
        this.userService.getUserById(params.id).subscribe(rep => {
          this.user = rep.user
          for (var i =0; i<this.showPosts.posts.length; i++){
            this.showPosts.users.push(this.user);
          }
        })
      })
    })
  }

  



  changeOption(event: any){
    this.currentChoose = event.target.value;
  }

}
