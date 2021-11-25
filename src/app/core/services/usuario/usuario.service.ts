import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Usuario } from '../../models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http:HttpClient) {

  }
//  @param


consultarUsuarioLogin(user:String, pass:String){

  //  return this.http.get('localhost::3000/usuario/consultarUsuarioLogin/'+usuario.user+'-'+usuario.pass)
  return this.http.get('http://localhost:3000/usuario/consultarUsuarioLogin/'+user+'-'+pass+'-'+'banco')
  .pipe(map(resultado =>{
    return resultado
    }))

  }


 registrarUsuario(usuario:Usuario){
   const headers = {  };
   const body = {
     login:usuario.user,
     clave:usuario.pass,
     nombres:usuario.nombre,
     apellidos:usuario.apellido,
     rol:usuario.idRol,
     estado:usuario.idEstado,
     ahorro:usuario.ahorro_usuario,
     telefono:usuario.telefono,
     direccion:usuario.direccion,
     institucion: 'banco',
    };
 return this.http.post<any>('http://localhost:3000/usuario/registrarUsuario', body).pipe(map(resultado =>{
     return resultado
     }))
   }

   consultarUsuario(usuario:Usuario){
     return this.http.get('http://localhost:3000/usuario/consultarUsuarios/'+usuario.user+'-'+'banco')
     .pipe(map(resultado =>{
       return resultado
       }))

     }



     actualizarUsuario(usuario:Usuario,usuarioConsultado:String){
       const headers = {  };
       const body = {
      //   usuario:usuario.user,
      login:usuario.user,
      clave:usuario.pass,
      nombres:usuario.nombre,
      apellidos:usuario.apellido,
      rol:usuario.idRol,
      estado:usuario.idEstado,
      ahorro:usuario.ahorro_usuario,
      telefono:usuario.telefono,
      direccion:usuario.direccion,
      institucion: 'banco',
        };
     return this.http.post<any>('http://localhost:3000/usuario/actualizarUsuario', body).pipe(map(resultado =>{
         return resultado
         }))
       }


     eliminarUsuario(usuario:Usuario,usuarioConsultado:String){
       const headers = {  };
       const body = {
         login:usuario.user,
         institucion: 'banco',
        };
     return this.http.post<any>('http://localhost:3000/usuario/eliminarUsuario', body).pipe(map(resultado =>{
         return resultado
         }))
       }

}
