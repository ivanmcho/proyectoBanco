import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Empleado } from '../../models/empleado/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(private http: HttpClient) {}

  consultarEmpleadoLogin(user:String, pass:String){

    //  return this.http.get('localhost::3000/usuario/consultarUsuarioLogin/'+usuario.user+'-'+usuario.pass)
    return this.http.get('http://localhost:3000/empleado/consultarEmpleadoLogin/'+user+'-'+pass+'-'+'banco')
    .pipe(map(resultado =>{
      return resultado
      }))

    }

  registrarEmpleado(empleado: Empleado) {
    const headers = {};
    const body = {
      login: empleado.user,
      clave:empleado.pass,
      nombres: empleado.nombre,
      apellidos: empleado.apellido,
      rol: empleado.idRol,
      estado: empleado.idEstado,
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/empleado/registrarEmpleado', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  consultarEmpleado(empleado: Empleado){
    return this.http.get('http://localhost:3000/empleado/consultarEmpleado/'+empleado.user+'-'+'banco')
    .pipe(map(resultado =>{
      return resultado
      }))

    }

  actualizarEmpleado(empleado: Empleado, consultaEmpleado: String) {
    const headers = {};
    const body = {
      login: empleado.user,
      clave:empleado.pass,
      nombres: empleado.nombre,
      apellidos: empleado.apellido,
      rol: empleado.idRol,
      estado: empleado.idEstado,
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/empleado/actualizarEmpleado', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }

  eliminarEmpleado(empleado: Empleado, consultaEmpleadodo: String) {
    const headers = {};
    const body = {
      login:empleado.user,
      institucion: 'banco',
    };
    return this.http
      .post<any>('http://localhost:3000/empleado/eliminarEmpleado', body)
      .pipe(
        map((resultado) => {
          return resultado;
        })
      );
  }
}
