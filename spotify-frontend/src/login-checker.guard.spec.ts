import { TestBed } from '@angular/core/testing';

import { LoginCheckerGuard } from './login-checker.guard';

describe('LoginCheckerGuard', () => {
  let guard: LoginCheckerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginCheckerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
