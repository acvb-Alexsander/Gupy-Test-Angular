import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosList } from './pedidos-list';
import { provideRouter } from '@angular/router';

describe('PedidosList', () => {
  let component: PedidosList;
  let fixture: ComponentFixture<PedidosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosList],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
