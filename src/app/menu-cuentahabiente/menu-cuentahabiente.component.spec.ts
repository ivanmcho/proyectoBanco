import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCuentahabienteComponent } from './menu-cuentahabiente.component';

describe('MenuCuentahabienteComponent', () => {
  let component: MenuCuentahabienteComponent;
  let fixture: ComponentFixture<MenuCuentahabienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCuentahabienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCuentahabienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
