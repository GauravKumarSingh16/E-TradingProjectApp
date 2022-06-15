import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user!:string;
  users!:User[];

  constructor(public userService:UserService,
    public router:Router) { }

  ngOnInit(): void {

    this.userService.getUserList().subscribe(users=>{
      this.users=users;
      console.log(users);
    }, err=>{
      console.log(err);
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
  }

  Logout(){
    this.userService.Logout();
    //Login
   this.router.navigate(['/login']);
  }
}
