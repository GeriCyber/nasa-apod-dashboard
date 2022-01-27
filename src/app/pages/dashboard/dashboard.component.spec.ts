import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NasaService } from '../../services/nasa.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardComponent],
        imports: [RouterModule, HttpClientTestingModule],
        providers: [NasaService],
      }).compileComponents();

      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('Dashboard Component Instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(DashboardComponent);
    expect(component).toBeTruthy();
    expect(component.dateRequests.length).toBe(6);
  });
});
