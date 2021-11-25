import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCreditoComponent } from './reporte-credito.component';

describe('ReporteCreditoComponent', () => {
  let component: ReporteCreditoComponent;
  let fixture: ComponentFixture<ReporteCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
