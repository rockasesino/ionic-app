import { TestBed } from '@angular/core/testing';

import { Foto } from './fotoservice';

describe('Foto', () => {
  let service: Foto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Foto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
