import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent implements OnInit {
  public usuario: Usuario;
  public usuarioConsultado: string='';
  usuariosObtenidos: Usuario[];

  constructor( private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
    this.usuariosObtenidos = [];
  //  this.usuario.nombre="hello"
  }

  actualizarUsuario(): void {
      if (this.usuarioConsultado!='') {
      this.usuarioService.actualizarUsuario(this.usuario,this.usuarioConsultado).subscribe(data => {
        alert('ejecucion')
        if (data  != null) {
          alert("Usuario Actualizado Exitosamente")
          this.limpiarCampos()
        }else{
          alert("Usuario no Actualizado")
          this.limpiarCampos()
        }
        });
    }else{
      alert('Consulte primero un login_name por favor')
    }
  }

  limpiarCampos():void{
    this.usuario=new Usuario();
    this.usuarioConsultado='';

  }

  eliminarUsuario(): void {
       if (this.usuario.user!='') {
      this.usuarioService.eliminarUsuario(this.usuario,this.usuarioConsultado).subscribe(data => {
        if (data  != null) {
          alert("Usuario Eliminado Exitosamente")
          this.limpiarCampos()
        }else{
          alert("Usuario no Eliminado")
          this.limpiarCampos()
        }
        });
    }else{
      alert('Consulte primero un login_name por favor')
    }
  }

  consultarUsuario(): void {
    this.usuarioConsultado=this.usuario.user;
    this.usuarioService.consultarUsuario(this.usuario).subscribe(
      (res) => {
        const data: any = res;
        this.usuariosObtenidos = data;
        if (this.usuariosObtenidos != null) {
          console.log(this.usuariosObtenidos);
          if (this.usuariosObtenidos.length == 0) {
            alert('Error al consultar el usuario');
            this.limpiarCampos();
          } else {
            console.log(this.usuariosObtenidos);
            this.usuario.pass = data[0].password,
            this.usuario.idRol = data[0].id_rol,
            this.usuario.idEstado = data[0].id_estado,
            this.usuario.nombre = data[0].nombre_usuario,
            this.usuario.apellido = data[0].apellido_usuario,
            this.usuario.direccion = data[0].direccion_usuario,
            this.usuario.telefono = data[0].telefono_usuario,
            this.usuario.ahorro_usuario = data[0].ahorro_usuario
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }

  ngOnInit(): void {
  }

}
