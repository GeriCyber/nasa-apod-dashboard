/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { NasaService } from './nasa.service';

describe('Service: Nasa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NasaService],
    });
  });

  it('should ...', inject([NasaService], (service: NasaService) => {
    expect(service).toBeTruthy();
  }));
});
