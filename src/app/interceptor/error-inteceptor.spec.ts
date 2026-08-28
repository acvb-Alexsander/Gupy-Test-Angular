import { TestBed } from '@angular/core/testing';
import { ErrorInteceptor } from './error-inteceptor';

describe('ErrorInteceptor', () => {
  let service: typeof ErrorInteceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorInteceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
