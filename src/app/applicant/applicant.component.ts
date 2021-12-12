import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../Services/applicant.service';
import { Applicant } from '../Shared/Applicant';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantComponent implements OnInit {
  applicants:Applicant[]=[];
  condition:boolean=true;
  constructor(private _applicantService:ApplicantService) 
  {
  }

  ngOnInit(): void {
    this._applicantService.GetAllApplicants().subscribe(data=>
      {
        this.applicants=data
        console.log(data);
      })
    }


  deleteApplicant(id: any)
  {
    console.warn(id);
    this._applicantService.DeleteApplicant(id).subscribe(data=>{
    this.applicants=this.applicants.filter(item=>item.ID !=id);
    console.log(data)
  });
}
hired(id:number)
{
  this._applicantService.Hired(id).subscribe(datajh=>{
    this._applicantService.GetAllApplicants().subscribe(data=>
      {
        this.applicants=data
        console.log(data);
      })
  });
}
unhired(id:number)
{
  this._applicantService.unHired(id).subscribe(datajh=>{
    this._applicantService.GetAllApplicants().subscribe(data=>
      {
        this.applicants=data
        console.log(data);
      })
  });
}

}
