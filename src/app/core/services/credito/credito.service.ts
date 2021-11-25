import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Credito } from '../../models/credito/credito';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  constructor(private http: HttpClient) {}

  registrarCredito(credito: Credito) {
    const headers = {};
    const body = {
      dpi_usuario: credito.dpi_usuario,
      cantidad_credito: credito.cantidad_credito,
      cuotas_credito: credito.cuotas_credito,
      idEstado: credito.idEstado,
      id_empleado: credito.id_empleado,
      institucion: 'banco',
    };
    console.log(body);
    return this.http
      .post<any>('http://localhost:3000/credito/registrarCredito', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  consultarCredito(Credito: Credito, detInstitucion) {
    let institucion= 'banco';
    if (detInstitucion==1){
      institucion="banco";
    }else{
      institucion="cooperativa";
    }
    return this.http
      .get('http://localhost:3000/credito/consultarCredito/'+Credito.dpi_usuario+'-'+Credito.id_credito+'-'+institucion)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  actualizarCredito(credito: Credito, creditoConsultado: String) {
    const headers = {};
    const body = {
      //   consulta:consulta.user,
      dpi_usuario: credito.dpi_usuario,
      cantidad_credito: credito.cantidad_credito,
      cuotas_credito: credito.cuotas_credito,
      idEstado: credito.idEstado,
      id_empleado: credito.id_empleado,
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/credito/actualizarCredito', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  eliminarCredito(credito: Credito, creditoConsultado: String) {
    const headers = {};
    const body = {
      id_consulta:credito.id_credito,
      dpi_usuario: credito.dpi_usuario,
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/credito/eliminarCredito', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }
}
