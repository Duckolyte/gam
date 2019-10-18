import { TestBed } from '@angular/core/testing';

import { PersisterService } from './persister.service';

describe('PersisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersisterService = TestBed.get(PersisterService);
    expect(service).toBeTruthy();
  });
});
