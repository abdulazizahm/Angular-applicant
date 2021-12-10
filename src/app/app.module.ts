import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { AddapplicantComponent } from './applicant/addapplicant/addapplicant.component';
import { UpdateapplicantComponent } from './applicant/updateapplicant/updateapplicant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    AddapplicantComponent,
    UpdateapplicantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
