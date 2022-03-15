import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  @ViewChild("inputEmail") inputEmail: ElementRef<HTMLInputElement>
  @ViewChild("inputPassword") inputPassword: ElementRef<HTMLInputElement>

  showSpinner = false;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitLoginAccount(){
    this.showSpinner = true;
    var account = new Account()
    account.email = this.inputEmail.nativeElement.value;
    account.password = this.inputPassword.nativeElement.value
    this.accountService.login(account).subscribe(response => {
      if (response.success){
        localStorage.setItem('linklove', response.access_token)
        this.showSpinner = false;
        this.router.navigate(['dashboard']).then(() => {window.location.reload()})
      }
    },() => {this.showSpinner = false})
  }

}
