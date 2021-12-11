import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from '../Shared/Applicant';


@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  url: string = 'http://http://localhost:32393/api/applicant';
  constructor(private _http: HttpClient) {}

  GetAllApplicants(): Observable<Applicant[]> {
    return this._http.get<Applicant[]>(this.url);
  }

  getApplicantById(id: any): Observable<Applicant> {
    return this._http.get<Applicant>(`${this.url}/${id}`);
  }

  AddApplicant(data: Applicant): Observable<any>{
    let formData = new FormData();
    formData.append('Name', data.Name);
    formData.append("FamilyName",`${data.FamilyName}`);
    formData.append("Address",`${data.Address}`);
    formData.append("CountryOfOrigin",`${data.CountryOfOrigin}`);
    formData.append("EMailAdress",`${data.EMailAdress}`);
    formData.append("Age",`${data.Age}`);
    formData.append("Hired",`${data.Hired}`);
    //formData.append("User_Id",`${null}`);
    return this._http.post<any>(this.url/*+"/post"*/, formData);
  }

  DeleteApplicant(id: any): Observable<Applicant[]> {
    return this._http.delete<Applicant[]>(`${this.url}/${id}`);
  }

  UpdateApplicant(data: Applicant): Observable<any>{
    let formData = new FormData();
    formData.append('Name', data.Name);
    formData.append("FamilyName",`${data.FamilyName}`);
    formData.append("Address",`${data.Address}`);
    formData.append("CountryOfOrigin",`${data.CountryOfOrigin}`);
    formData.append("EMailAdress",`${data.EMailAdress}`);
    formData.append("Age",`${data.Age}`);
    formData.append("Hired",`${data.Hired}`);
    //formData.append("User_Id",`${null}`);
    return this._http.put(`${this.url}/${data.ID}`,formData);
  }
}
