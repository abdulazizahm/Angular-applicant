import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../Shared/Country';

@Injectable({
  providedIn: 'root'
})
export class ApiCountriesService {

  url: string = 'https://restcountries.com/v2/all?fields=name';
  constructor(private _http: HttpClient) {}
  GetAllCountries(): Observable<Country[]> {
    return this._http.get<Country[]>(this.url);
  }

}
