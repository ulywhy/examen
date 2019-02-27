import { TestBed } from '@angular/core/testing';

import { KnowledgeDBService } from './knowledge-db.service';

describe('KnowledgeDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnowledgeDBService = TestBed.get(KnowledgeDBService);
    expect(service).toBeTruthy();
  });
});
