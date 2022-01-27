/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailCardComponent } from './detail-card.component';

describe('DetailCardComponent', () => {
  let component: DetailCardComponent;
  let fixture: ComponentFixture<DetailCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DetailCardComponent],
        imports: [RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(DetailCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('Detail Card Component Instance', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(DetailCardComponent);
  });

  it('Navigate to Details', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.date = '2022-01-27';
    component.goToDetail();
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['/detail', '2022-01-27']);
  });
});
