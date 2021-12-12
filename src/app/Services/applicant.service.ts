import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from '../Shared/Applicant';


@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  url: string = 'http://localhost:32393/api/applicant';
  constructor(private _http: HttpClient) {}

  GetAllApplicants(): Observable<Applicant[]> {
    return this._http.get<Applicant[]>(this.url);
  }

  getApplicantById(id: any): Observable<Applicant> {
    return this._http.get<Applicant>(`${this.url}/${id}`);
  }

  AddApplicant(data: Applicant): Observable<any>{
    return this._http.post<any>(this.url, data);
  }

  DeleteApplicant(id: any): Observable<Applicant[]> {
    return this._http.delete<Applicant[]>(`${this.url}/${id}`);
  }

  UpdateApplicant(data: Applicant): Observable<any>{
    return this._http.put(`${this.url}/${data.ID}`,data);
  }
  Hired(id: number): Observable<any>{
    return this._http.get(`${this.url+"/Hired"}/${id}`);
  }
  unHired(id: number): Observable<any>{
    return this._http.get(`${this.url+"/unHired"}/${id}`);
  }
}
