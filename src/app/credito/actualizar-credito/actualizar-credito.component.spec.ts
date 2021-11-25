import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCreditoComponent } from './actualizar-credito.component';

describe('ActualizarCreditoComponent', () => {
  let component: ActualizarCreditoComponent;
  let fixture: ComponentFixture<ActualizarCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
