import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-TradingApp';
  constructor(public userService:UserService,
    private router:Router){}

  Logout(){
    this.userService.Logout();
    //Login
   this.router.navigate(['/login']);
  }
}
