import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = new User();
  @Output() sendUser: EventEmitter<User> = new EventEmitter();

  showAuthOptions = false

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUserByToken().subscribe(response => {
      this.user = response.user
      this.sendUser.emit(this.user)
    })
  }

  goProfilePage(id: String){
    this.router.navigate(['/profile'], {queryParams: {id}})
  }

  handleAuthOptions() {
    this.showAuthOptions = !this.showAuthOptions
  }

  logoutAccount(){
    localStorage.removeItem('linklove')
    this.router.navigate(['login'])
  }

  mainPage(){
    this.router.navigate(['dashboard'])
  }

}
