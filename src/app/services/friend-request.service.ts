import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseFriendRequest } from '../models/friendRequest';
const headerOption = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('linklove')}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {

  constructor(
    private http: HttpClient
  ) { }

  getNumberOfFriendRequest():Observable<ResponseFriendRequest>{
    return this.http.get<ResponseFriendRequest>(`http://localhost:8000/friend_request/auth`, headerOption);
  }
}
