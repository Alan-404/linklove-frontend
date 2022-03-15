import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AddPost, Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post-screen',
  templateUrl: './add-post-screen.component.html',
  styleUrls: ['./add-post-screen.component.scss']
})
export class AddPostScreenComponent implements OnInit {
  @ViewChild("inputContent") inputContent: ElementRef<HTMLInputElement>

  @Output() closeAddPostForm: EventEmitter<void> = new EventEmitter()

  media: Array<any> = []



  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }



  submitAddPost(){
    var post = new Post()
    post.content = this.inputContent.nativeElement.value
    /* this.postService.addPost(post).subscribe(() => {
      this.closeForm()
    }) */
    var addPost = new AddPost()
    addPost.post = post
    addPost.media = this.media
    this.postService.insertPost(addPost).subscribe(response => {
      console.log(response)
    })
  }

  closeForm(){
    this.closeAddPostForm.emit()
  }

  file: any

  getImage(event: any){
    var fileReader = new FileReader()
    fileReader.readAsDataURL(event.target.files[0])
    fileReader.onload = (__event => {
      this.media.push(fileReader.result)
    })

  }

}
