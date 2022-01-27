import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { APOD, MediaType } from '../../models/apod.model';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  date = new Date().toISOString().slice(0, 10);
  dateRequests: Observable<APOD>[] = [];
  mediaType = MediaType;

  constructor(private _nasa: NasaService) {}

  ngOnInit() {
    this._buildDateRequests();
  }

  private _buildDateRequests() {
    const today = new Date();
    for (let i = 0; i < 6; i++) {
      const date = i > 0 ? new Date(today.setDate(today.getDate() - 1)) : today;
      this.dateRequests = [
        ...this.dateRequests,
        this._nasa.getAPOD(date.toISOString().slice(0, 10)).pipe(delay(100)),
      ];
    }
  }
}
