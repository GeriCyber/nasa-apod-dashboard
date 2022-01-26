import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private _http: HttpClient) { }
  
  get(url: string): Observable<any> {
    return this._http.get(url, this._options());
}
  
  private _options = () => ({ headers: this._headers });
  
}
