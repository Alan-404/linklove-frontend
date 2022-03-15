import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseRegister, ResponseUser, User } from '../models/user';
import { Account } from '../models/account';

const headerOption = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('linklove')}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User, account:Account):Observable<ResponseRegister>{
    var data = {
      first_name: user.first_name, 
      last_name: user.last_name, 
      birth_date: user.birth_date, 
      phone: user.phone, 
      address: user.address, 
      gender: user.gender,
      country: user.country,
      avatar: user.avatar,
      email: account.email,
      password: account.password
    }
    return this.http.post<ResponseRegister>(`http://localhost:8000/user/user_api`, data)
  }


  getUserByToken():Observable<ResponseUser>{
    return this.http.get<ResponseUser>(`http://localhost:8000/user/auth`, headerOption)
  }

  getUserById(id: String):Observable<ResponseUser>{
    return this.http.get<ResponseUser>(`http://localhost:8000/user/info?id=${id}`)
  }
}
