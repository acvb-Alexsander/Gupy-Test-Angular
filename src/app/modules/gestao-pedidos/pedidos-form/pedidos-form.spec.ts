import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosForm } from './pedidos-form';
import { provideRouter } from '@angular/router';

describe('PedidosForm', () => {
  let component: PedidosForm;
  let fixture: ComponentFixture<PedidosForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosForm],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
