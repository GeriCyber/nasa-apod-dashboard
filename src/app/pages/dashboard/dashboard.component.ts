import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { APODCard, MediaType } from '../../models/apod.model';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  dateRequests: APODCard[] = [];
  mediaType = MediaType;

  constructor(private _nasa: NasaService) {}

  ngOnInit() {
    this._buildDateRequests();
  }

  /**
   * Generate date requests
   * From current date to the previous 5 days
   *
   * @private
   * @memberof DashboardComponent
   */
  private _buildDateRequests() {
    const today = new Date();
    for (let i = 0; i < 6; i++) {
      const date = i > 0 ? new Date(today.setDate(today.getDate() - 1)) : today;
      this.dateRequests = [
        ...this.dateRequests,
        {
          date: date.toISOString().slice(0, 10),
          request: this._nasa
            .getAPOD(date.toISOString().slice(0, 10))
            .pipe(delay(100)),
        },
      ];
    }
  }
}
