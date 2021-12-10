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

  GetAllEmployees(): Observable<Applicant[]> {
    return this._http.get<Applicant[]>(this.url);
  }

  getEmployeeById(id: any): Observable<Applicant> {
    return this._http.get<Applicant>(`${this.url}/${id}`);
  }

  AddEmployee(data: Applicant): Observable<any>{
    let formData = new FormData();
    formData.append('Name', data.Name);
    formData.append("SSN",`${data.FamilyName}`);
    formData.append("Address",`${data.Address}`);
    formData.append("CountryOfOrigin",`${data.CountryOfOrigin}`);
    formData.append("EMailAdress",`${data.EMailAdress}`);
    formData.append("Age",`${data.Age}`);
    formData.append("Hired",`${data.Hired}`);
    formData.append("User_Id",`${null}`);
    return this._http.post<any>(this.url+"/post", formData);
  }

  DeleteEmployee(id: any): Observable<Applicant[]> {
    return this._http.delete<Applicant[]>(`${this.url}/${id}`);
  }

  UpdateEmployee(data: Applicant): Observable<any>{
    let formData = new FormData();
    formData.append('Name', data.Name);
    formData.append("SSN",`${data.FamilyName}`);
    formData.append("Address",`${data.Address}`);
    formData.append("CountryOfOrigin",`${data.CountryOfOrigin}`);
    formData.append("EMailAdress",`${data.EMailAdress}`);
    formData.append("Age",`${data.Age}`);
    formData.append("Hired",`${data.Hired}`);
    formData.append("User_Id",`${null}`);
    return this._http.put(`${this.url}/${data.ID}`,formData);
  }
}
