import { TestBed } from '@angular/core/testing';

import { GaleriaService } from './galeria.service';

describe('GaleriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaleriaService = TestBed.get(GaleriaService);
    expect(service).toBeTruthy();
  });
});
