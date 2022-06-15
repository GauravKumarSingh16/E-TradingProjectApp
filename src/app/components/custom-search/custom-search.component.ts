import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Share } from 'src/app/models/share';
import { ShareService } from 'src/app/services/share.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent implements OnInit {

  title='Custom Search';
  searchText:any;
  shares!:Share[];

  constructor(private api:UserService,
    private formBuilder:FormBuilder,
    private shareService:ShareService) { }

  ngOnInit(): void {
    this.shareService.getShareList().subscribe(shares=>{
      this.shares=shares;
      console.log(shares);
    }, err=>{
      console.log(err);
    });
  }

}
