import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  date = new Date().toISOString().slice(0, 10);
  constructor(private _nasa: NasaService) {}

  ngOnInit() {
    this._getAPOD();
    // console.log(this.date);
  }

  private _getAPOD() {
    this._nasa.getAPOD(this.date).subscribe(
      (data) => {
        // console.log(data);
      },
      (error) => {
        // console.log(error);
      }
    );
  }
}
