import { Component, OnInit } from '@angular/core';
import { Share } from 'src/app/models/share';
import { ShareService } from 'src/app/services/share.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-share-list',
  templateUrl: './share-list.component.html',
  styleUrls: ['./share-list.component.css']
})
export class ShareListComponent implements OnInit {
  title='Share List';
  shareList!:Share[];

  constructor(private shareService:ShareService,
    public userService:UserService) { }

  ngOnInit(): void {
    this.shareService.getShareList().subscribe(shares=>{
      this.shareList=shares;
      console.log(shares);
    }, err=>{
      console.log(err);
    });
  }

  deleteShare(id: number){
    this.shareService.delete(id).subscribe(result=>{
      alert('Share deleted');
     this.ngOnInit();
    }, err=>{
      alert(err);
    })
  }

  buyShare(){
    alert("Share buy successfully");
  }
  
  sellShare(){
    alert("Share Sold successfully");
  }
}
