import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  login(account: Account):Observable<ResponseLogin>{
    return this.http.post<ResponseLogin> (`http://localhost:8000/account/auth`, account)
  }

}
