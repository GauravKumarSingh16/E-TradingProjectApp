import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { share } from 'rxjs';
import { Share } from 'src/app/models/share';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-uppdate-share',
  templateUrl: './uppdate-share.component.html',
  styleUrls: ['./uppdate-share.component.css']
})
export class UppdateShareComponent implements OnInit {
  shareForm!:FormGroup;
  shareId!:number;

  constructor(private shareService:ShareService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.shareId=this.route.snapshot.params['ShareId'];
    this.shareService.getById(this.shareId).subscribe(share=>{
      console.log(Share);

      this.shareForm=new FormGroup({
        ShareId:new FormControl(this.shareId),
        CompanyName:new FormControl(share.CompanyName),
        ShareQuantity:new FormControl(share.ShareQuantity),
        SharePrice:new FormControl(share.SharePrice)
      });
    })
  }

  onFormSubmit(form:NgForm){
    this.shareService.update(this.shareId, form).subscribe(result=>{
     alert('Share updated');
     this.router.navigate(['shares']);
    }, err=>{
      alert(err);
    
  });
  }
}
