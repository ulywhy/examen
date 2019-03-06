import { TestBed } from '@angular/core/testing';

import { DBConnectorService } from './dbconnector.service';

describe('DBConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBConnectorService = TestBed.get(DBConnectorService);
    expect(service).toBeTruthy();
  });
});
