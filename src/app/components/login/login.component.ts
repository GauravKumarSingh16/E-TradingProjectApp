import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }
 
  onSubmit(form:NgForm){
    console.log(form);
    this.userService.login(form).subscribe(login=>{
      console.log(login);
      localStorage.setItem('userInfo',JSON.stringify(login));
      this.router.navigate(['/shares']);
    }, err=>{
      console.log(err);
      alert("login failed");
    })
  }
}
