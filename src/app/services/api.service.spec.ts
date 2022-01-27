import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('Service: Api', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
    })
  );

  it('API Service Instance', inject([ApiService], (service: ApiService) => {
    expect(service).toBeDefined();
    expect(service).toBeTruthy();
  }));
});
