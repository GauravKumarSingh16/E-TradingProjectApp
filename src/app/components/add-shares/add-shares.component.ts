import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-add-shares',
  templateUrl: './add-shares.component.html',
  styleUrls: ['./add-shares.component.css']
})
export class AddSharesComponent implements OnInit {
  shareForm!:FormGroup;

  constructor(private shareService:ShareService,
    private router:Router) { }

  ngOnInit(): void {
    this.shareForm=new FormGroup({
      CompanyName:new FormControl(),
      ShareQuantity:new FormControl(),
      SharePrice:new FormControl()
    });
  }

  onFormSubmit(form: NgForm){
    this,this.shareService.add(form).subscribe(result=>{
      alert('Share added');
      this.router.navigate(['/shares']);
    }, err=>{
      console.log(err);
      alert(err);
    });

  }
}
