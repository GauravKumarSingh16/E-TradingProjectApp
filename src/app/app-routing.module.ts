import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSharesComponent } from './components/add-shares/add-shares.component';
import { CustomSearchComponent } from './components/custom-search/custom-search.component';
import { InspectionComponent } from './components/inspection/inspection.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ShareListComponent } from './components/share-list/share-list.component';
import { UppdateShareComponent } from './components/uppdate-share/uppdate-share.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:LoginComponent},
  {path:'shares/update/:id',component:UppdateShareComponent},
  {path:'shares/add',component:AddSharesComponent},
  {path:'shares',component:ShareListComponent},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'inspection', component:InspectionComponent},
  {path:'custom-search', component:CustomSearchComponent},
  {path:'profile/:id', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
