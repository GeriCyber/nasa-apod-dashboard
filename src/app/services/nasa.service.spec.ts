import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { ApiService } from './api.service';
import { NasaService } from './nasa.service';

describe('Service: Nasa', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [ApiService],
        imports: [HttpClientTestingModule],
      });
    })
  );

  it('Nasa Service Instance', inject([NasaService], (service: NasaService) => {
    expect(service).toBeDefined();
    expect(service).toBeTruthy();
  }));
});
