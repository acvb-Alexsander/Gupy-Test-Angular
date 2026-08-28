import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsqueciSenha } from './esqueci-senha';
import { provideRouter } from '@angular/router';

describe('EsqueciSenha', () => {
  let component: EsqueciSenha;
  let fixture: ComponentFixture<EsqueciSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsqueciSenha],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EsqueciSenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
