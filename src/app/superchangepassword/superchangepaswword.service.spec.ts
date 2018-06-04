import { TestBed, inject } from '@angular/core/testing';

import { SuperchangepaswwordService } from './superchangepaswword.service';

describe('SuperchangepaswwordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperchangepaswwordService]
    });
  });

  it('should be created', inject([SuperchangepaswwordService], (service: SuperchangepaswwordService) => {
    expect(service).toBeTruthy();
  }));
});
