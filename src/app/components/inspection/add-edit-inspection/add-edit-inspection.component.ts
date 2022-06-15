import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  constructor(private userServices:UserService) { }

  @Input() inspection:any;
  id: number = 0;
  FullName: string = "";
  UserName: string = "";
  Email : string="";
  PhoneNumber : string="";
Password : string="";
  Role : string="";
  
  ngOnInit(): void {
    this.id = this.inspection.id;
    this.FullName = this.inspection.FullName;
    this.UserName = this.inspection.UserName;
    this.Email = this.inspection.Email;
    this.PhoneNumber = this.inspection.PhoneNumber;
    this.Password = this.inspection.Password;
    this.Role = this.inspection.Role;
    this.statusList$ = this.userServices.getStatusList();
    this.inspectionList$ = this.userServices.getInspectionList();
    this.inspectionTypesList$ = this.userServices.getInspectionTypesList();
  }

  addInspection() {
    var inspection = {
      FullName:this.FullName,
      Username:this.UserName,
      Email:this.Email,
      PhoneNumber:this.PhoneNumber,
      Password:this.Password,
      Role:this.Role
    }
    this.userServices.addInspection(inspection).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateInspection() {
    var inspection = {
      id: this.id,
      FullName:this.FullName,
      Username:this.UserName,
      Email:this.Email,
      PhoneNumber:this.PhoneNumber,
      Password:this.Password,
      Role:this.Role
    }
    var id:number = this.id;
    this.userServices.updateInspection(id,inspection).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }
}
