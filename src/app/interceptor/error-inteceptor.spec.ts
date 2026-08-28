import { TestBed } from '@angular/core/testing';
import { HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { ErrorInteceptor } from './error-inteceptor';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('ErrorInteceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: vi.fn(),
          },
        },
        {
          provide: MatSnackBar,
          useValue: {
            open: vi.fn(),
          },
        },
      ],
    });
  });

  it('should be created', () => {
    expect(ErrorInteceptor).toBeTruthy();
  });

  it('should intercept the request successfully', () => {
    const request = new HttpRequest('GET', '/test');

    const next: HttpHandlerFn = vi.fn(() => of(new HttpResponse({ status: 200 })));

    TestBed.runInInjectionContext(() => {
      ErrorInteceptor(request, next).subscribe((response) => {
        expect(response).toBeTruthy();
      });
    });

    expect(next).toHaveBeenCalled();
  });
});
