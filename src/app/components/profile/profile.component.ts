import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId!:number;
  user!:User;
  userForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['id'];
    this.userService.getById(this.userId).subscribe(user=>{
      console.log(User);

      this.userForm=new FormGroup({
        id:new FormControl(this.userId),
        fullname:new FormControl(user.FullName),
        username:new FormControl(user.UserName),
        email:new FormControl(user.Email),
        phonenumber: new FormControl(user.PhoneNumber),
        password:new FormControl(user.Password),
        role:new FormControl(user.Role)
      });
    })
  }

  onFormSubmit(form:NgForm){
    this.userService.update(this.userId, form).subscribe(result=>{
     alert('user updated');
     this.router.navigate(['users']);
    }, err=>{
      alert(err);
    
  });
  }
}
