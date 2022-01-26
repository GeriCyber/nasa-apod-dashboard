import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private _http: HttpClient) {}

  get(url: string, param: string): Observable<any> {
    return this._http.get(url, this._generateHeaders(param));
  }

  private _generateHeaders = (param: string) => ({
    headers: this._headers,
    params: { date: param },
  });
}
