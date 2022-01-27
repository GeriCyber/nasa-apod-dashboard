import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { APOD } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private _api: ApiService) {}

  /**
   * Get the Astronomy Picture of the day from the NASA API
   *
   * @param {string} date
   * @return {*}  {Observable<APOD>}
   * @memberof NasaService
   */
  getAPOD(date: string): Observable<APOD> {
    return this._api.get(`${environment.API_URL}${environment.API_KEY}`, date);
  }
}
