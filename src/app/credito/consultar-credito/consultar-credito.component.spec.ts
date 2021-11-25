import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCreditoComponent } from './consultar-credito.component';

describe('ConsultarCreditoComponent', () => {
  let component: ConsultarCreditoComponent;
  let fixture: ComponentFixture<ConsultarCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
