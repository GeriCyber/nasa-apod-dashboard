import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APOD, MediaType } from '../../models/apod.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  data: APOD = this._activatedRoute.snapshot.data.request;
  mediaType = MediaType;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  /**
   * Navigate to Dashboard
   *
   * @memberof DetailComponent
   */
  goBack = () => this._router.navigate(['/']);
}
