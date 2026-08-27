import { TestBed } from '@angular/core/testing';
import { CallPedidos } from './call-pedidos';

describe('CallPedidos', () => {
  let service: CallPedidos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallPedidos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
