import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteConsultaComponent } from './reporte-consulta.component';

describe('ReporteConsultaComponent', () => {
  let component: ReporteConsultaComponent;
  let fixture: ComponentFixture<ReporteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
