import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APOD } from '../models';
import { NasaService } from '../services/nasa.service';

@Injectable({
  providedIn: 'root',
})
export class ApodDetailResolver implements Resolve<APOD | null> {
  constructor(
    private _router: Router,
    private _nasa: NasaService,
    private _toastrService: NbToastrService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<APOD | null> {
    const date: string = route.params.date;
    return this._nasa.getAPOD(date).pipe(
      catchError((error: HttpErrorResponse) => {
        this._router
          .navigate(['/'])
          .then(() => this._toastrService.danger(error.error.msg, 'Error'));
        return of(null);
      })
    );
  }
}
