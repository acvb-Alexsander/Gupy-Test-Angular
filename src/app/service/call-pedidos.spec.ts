import { TestBed } from '@angular/core/testing';
import { CallPedidosService } from './call-pedidos';

describe('CallPedidos', () => {
  let service: CallPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
