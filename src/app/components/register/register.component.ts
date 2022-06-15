import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;

  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullName: new FormControl(),
      username: new FormControl(),
      email:new FormControl(),
      phoneNumber:new FormControl(),
      password: new FormControl(),
      role:new FormControl()
    })
  }

  onSubmit(form:NgForm){
    console.log(form);
    this.userService.register(form).subscribe(user=>{
      console.log(user);
      this.router.navigate(['/login']);
    }, err=>{
      console.log(err);
      alert("register failed");
    })
  }
}
