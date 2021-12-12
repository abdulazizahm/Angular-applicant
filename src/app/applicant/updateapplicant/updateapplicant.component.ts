import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCountriesService } from 'src/app/Services/api-countries.service';
import { ApplicantService } from 'src/app/Services/applicant.service';
import { Applicant } from 'src/app/Shared/Applicant';
import { Country } from 'src/app/Shared/Country';

@Component({
  selector: 'app-updateapplicant',
  templateUrl: './updateapplicant.component.html',
  styleUrls: ['./updateapplicant.component.scss']
})
export class UpdateapplicantComponent implements OnInit {
  ApplicantData!: Applicant; 
  countriesList:Country[]=[];
  eorrors!:string
  id!:number
  constructor(private _activeRouter:ActivatedRoute,private _apiCountry:ApiCountriesService,private _applicantservice:ApplicantService,private _router:Router) 
  {
  }

  ngOnInit(): void {
    console.warn(this._activeRouter.snapshot.params['id']);
    this.id=parseInt(this._activeRouter.snapshot.params['id']);
    this._apiCountry.GetAllCountries().subscribe(data=>{
        this.countriesList=data
      },(error) =>{
        this.eorrors=error;
        console.log(error);
      }     
      );
      this._applicantservice.getApplicantById(this.id).subscribe((data)=>
      {
      this.ApplicantData=data
      console.log(data)
      },(error)=>
      {
        alert(error)
      }
      )
  }
  onSubmit()
  {
    //alert("submit");
    this._applicantservice.UpdateApplicant(this.ApplicantData).subscribe(
      (data)=>{this._router.navigate(['/applicant']);},
      (error)=>
      {
          alert(error.error.message);
          console.log(error);
      });
  }
 

}
