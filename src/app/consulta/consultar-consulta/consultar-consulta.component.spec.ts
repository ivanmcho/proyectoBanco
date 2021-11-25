import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarConsultaComponent } from './consultar-consulta.component';

describe('ConsultarConsultaComponent', () => {
  let component: ConsultarConsultaComponent;
  let fixture: ComponentFixture<ConsultarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
