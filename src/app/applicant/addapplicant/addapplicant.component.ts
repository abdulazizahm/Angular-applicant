import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCountriesService } from 'src/app/Services/api-countries.service';
import { ApplicantService } from 'src/app/Services/applicant.service';
import { Applicant } from 'src/app/Shared/Applicant';
import { Country } from 'src/app/Shared/Country';

@Component({
  selector: 'app-addapplicant',
  templateUrl: './addapplicant.component.html',
  styleUrls: ['./addapplicant.component.scss']
})
export class AddapplicantComponent implements OnInit {
  ApplicantData!: Applicant; 
  countriesList:Country[]=[];
  eorrors!:string

  constructor(private _apiCountry:ApiCountriesService,private _applicantservice:ApplicantService,private _router:Router) 
  {
    this.ApplicantData=new Applicant(0,"","","","","",0,undefined);
    this._apiCountry.GetAllCountries().subscribe((data)=>{
        this.countriesList=data
      },(error) =>{
        this.eorrors=error;
        console.log(error);
      }     
      )

  }

  ngOnInit(): void {
  }
  onSubmit() 
  {
    this._applicantservice.AddApplicant(this.ApplicantData).subscribe(
      (data)=>{this._router.navigate(["/applicant"])}, 
    (error)=> {this.eorrors=error.error.error_description;console.log(error.error)});
  }

}
