import { Component, OnInit, Input } from '@angular/core';
import { PostMedia } from 'src/app/models/postMedia';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss']
})
export class ShowImageComponent implements OnInit {

  @Input() allImages = new Array<PostMedia>()
  constructor() { }

  imageShow:PostMedia;
  index: number = 0


  arrNum: Array<number> = []

  ngOnInit(): void {
    if (this.allImages){
      this.imageShow = this.allImages[this.index];
    }
    for (var i = 0; i<this.allImages.length; i++){
      this.arrNum.push(i)
    }
  }

  nextImage(){
    if (this.index == this.allImages.length-1){
      this.index = 0
    }
    else{
      this.index = this.index +1;
    }
    this.imageShow = this.allImages[this.index]
  }

  prevImage(){
    if (this.index == 0){
      this.index = this.allImages.length -1
    }
    else{
      this.index = this.index - 1
    }
    this.imageShow = this.allImages[this.index]
  }

  changeImage(item: number){
    this.index = item
    this.imageShow = this.allImages[this.index]
  }

}
