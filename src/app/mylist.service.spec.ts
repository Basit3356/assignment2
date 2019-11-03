import { TestBed } from '@angular/core/testing';

import { mylistService } from './mylist.service';

describe('MylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: mylistService = TestBed.get(mylistService);
    expect(service).toBeTruthy();
  });
});
