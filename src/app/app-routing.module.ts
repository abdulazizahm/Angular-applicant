import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddapplicantComponent } from './applicant/addapplicant/addapplicant.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { UpdateapplicantComponent } from './applicant/updateapplicant/updateapplicant.component';

const routes: Routes = 
[
  { path: 'applicant', component: ApplicantComponent},
  { path: 'applicant/Add', component: AddapplicantComponent },
  { path: 'applicant/Edit/:id', component: UpdateapplicantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
