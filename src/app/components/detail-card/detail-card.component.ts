import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { APOD, MediaType } from '../../models/apod.model';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent {
  @Input() apodRequest$!: Observable<APOD>;
  @Input() date!: string;
  mediaType = MediaType;

  constructor(private _router: Router) {}

  /**
   * Navigate to the detail page
   *
   * @memberof DetailCardComponent
   */
  goToDetail() {
    this._router.navigate(['/detail', this.date]);
  }
}
