import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantService } from '../Services/applicant.service';
import { Applicant } from '../Shared/Applicant';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {
  applicants:Applicant[]=[];
  constructor(private _applicantService:ApplicantService, private router:Router) 
  {
    this._applicantService.GetAllApplicants().subscribe(data=>
      {
        this.applicants=data
        console.log(data)
      })
  }

  ngOnInit(): void {
    }


  deleteApplicant(id: any)
  {
    console.warn(id);
    this._applicantService.DeleteApplicant(id).subscribe(data=>{
    this.applicants=this.applicants.filter(item=>item.ID !=id);
    console.log(data)
  });
}

}
