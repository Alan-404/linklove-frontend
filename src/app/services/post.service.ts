import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddPost, Post, ResponsePosts, ShowPosts } from '../models/post';

const headerOption = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('linklove')}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }


  addPost(post: Post):Observable<boolean>{
    return this.http.post<boolean>(`http://localhost:8000/post/post_api`, post, headerOption)
  }

  getPosts():Observable<ShowPosts>{
    return this.http.get<ShowPosts>(`http://localhost:8000/post/all`)
  }

  getPostsOfUser(id: String):Observable<ResponsePosts>{
    return this.http.get<ResponsePosts>(`http://localhost:8000/post/user?id=${id}`)
  }

  insertPost(data: AddPost):Observable<any>{
    return this.http.post<any>(`http://localhost:8000/post/add_post`, data, headerOption)
  }


}
