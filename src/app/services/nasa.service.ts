import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private _api: ApiService) {}

  getAPOD(date: string): Observable<any> {
    return this._api.get(`${environment.API_URL}${environment.API_KEY}`, date);
  }
}
