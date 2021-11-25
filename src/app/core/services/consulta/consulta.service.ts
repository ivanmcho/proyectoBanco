import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Consulta } from '../../models/consulta/consulta';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  constructor(private http: HttpClient) {}

  registrarConsulta(consulta: Consulta) {
    const headers = {};
    const body = {
      dpi_usuario: consulta.dpi_usuario,
      nombres: consulta.nombre_usuario,
      apellidos: consulta.apellido_usuario,
      tieneCredito: consulta.tiene_credito,
      estadoCredito: consulta.Estado_credito,
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/consulta/registrarConsulta', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  consultarConsulta(consulta: Consulta) {
    let institucion= 'banco';
    return this.http
      .get('http://localhost:3000/consulta/consultarConsultasGeneral/'+institucion)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  actualizarConsulta(consulta: Consulta, consultaConsultado: String) {
    const headers = {};
    const body = {
      //   consulta:consulta.user,
      dpi_usuario: consulta.dpi_usuario,
      nombres: consulta.nombre_usuario,
      apellidos: consulta.apellido_usuario,
      tieneCredito: consulta.tiene_credito,
      estadoCredito: consulta.Estado_credito,
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/consulta/actualizarConsulta', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  eliminarConsulta(consulta: Consulta, consultaConsultado: String) {
    const headers = {};
    const body = {
      id_consulta:consulta.id_consulta,
      dpi_usuario: consulta.dpi_usuario,
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/consulta/eliminarConsulta', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }
}
