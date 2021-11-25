import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) {}

  consultarReporteUsuario() {
    const headers = {};
    const body = {
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/reporte/consultarReporteUsuario', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  consultarReporteEmpleado() {
    const headers = {};
    const body = {
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/reporte/consultarReporteEmpleado', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  consultarReporteCredito() {
    const headers = {};
    const body = {
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/reporte/consultarReporteCredito', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  consultarReporteConsulta() {
    const headers = {};
    const body = {
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/reporte/consultarReporteConsulta', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }


}
