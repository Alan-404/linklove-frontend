import { Component, OnInit, Input } from '@angular/core';
import { ShowPosts } from 'src/app/models/post';
import { handleDate } from 'src/app/common/lib';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {

  @Input() showPosts = new ShowPosts

  constructor() { }

  ngOnInit(): void {
    
  }

  convertDate(myDate: string){
    return handleDate(myDate)
  }

}
