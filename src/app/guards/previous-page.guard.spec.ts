import { TestBed } from '@angular/core/testing';

import { PreviousPageGuard } from './previous-page.guard';

describe('PreviousPageGuard', () => {
  let guard: PreviousPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreviousPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
