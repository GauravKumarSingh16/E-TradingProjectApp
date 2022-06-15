import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddSharesComponent } from './components/add-shares/add-shares.component';
import { ShareListComponent } from './components/share-list/share-list.component';
import { UppdateShareComponent } from './components/uppdate-share/uppdate-share.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InspectionComponent } from './components/inspection/inspection.component';
import { ShowInspectionComponent } from './components/inspection/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './components/inspection/add-edit-inspection/add-edit-inspection.component';
import { CustomSearchComponent } from './components/custom-search/custom-search.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddSharesComponent,
    ShareListComponent,
    UppdateShareComponent,
    ProfileComponent,
    NavBarComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent,
    CustomSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
