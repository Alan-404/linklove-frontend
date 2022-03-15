import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user';
import { Account } from 'src/app/models/account';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent implements OnInit {
  @ViewChild("inputFirstName") inputFirstName: ElementRef<HTMLInputElement>
  @ViewChild("inputLastName") inputLastName: ElementRef<HTMLInputElement>
  @ViewChild("inputBDate") inputBDate: ElementRef<HTMLInputElement>
  @ViewChild("inputPhone") inputPhone: ElementRef<HTMLInputElement>
  @ViewChild("selectGender") selectGender: ElementRef<HTMLInputElement>
  @ViewChild("selectCountry") selectCountry: ElementRef<HTMLInputElement>
  @ViewChild("inputAddress") inputAddress: ElementRef<HTMLInputElement>
  @ViewChild("inputEmail") inputEmail: ElementRef<HTMLInputElement>
  @ViewChild("inputPassword") inputPassword: ElementRef<HTMLInputElement>
  @ViewChild("inputRePass") inputRePassword: ElementRef<HTMLInputElement>


  imageShow: any = "../../../assets/images/account.png"
  file: File

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }


  getImage(event: any){
    this.file = event.target.files[0]
    var reader = new FileReader()
    reader.readAsDataURL(this.file)
    reader.onload = (__event) => {
      this.imageShow = reader.result
    }
  }

  submitRegisterUser(){

    const password = this.inputPassword.nativeElement.value
    const rePassword = this.inputRePassword.nativeElement.value
    if (password != rePassword){
      return;
    }

    var user = new User()
    user.first_name = this.inputFirstName.nativeElement.value
    user.last_name = this.inputLastName.nativeElement.value
    user.birth_date = this.inputBDate.nativeElement.value
    user.phone = this.inputPhone.nativeElement.value
    user.gender = this.selectGender.nativeElement.value
    user.address = this.inputAddress.nativeElement.value
    user.country = this.selectCountry.nativeElement.value
    user.avatar = this.imageShow
    
    var account = new Account()
    account.email = this.inputEmail.nativeElement.value
    account.password = password

    this.userService.registerUser(user, account).subscribe(response => {
      console.log(response)
    })
  }

}
