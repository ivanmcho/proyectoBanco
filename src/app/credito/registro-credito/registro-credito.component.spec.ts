import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCreditoComponent } from './registro-credito.component';

describe('RegistroCreditoComponent', () => {
  let component: RegistroCreditoComponent;
  let fixture: ComponentFixture<RegistroCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
