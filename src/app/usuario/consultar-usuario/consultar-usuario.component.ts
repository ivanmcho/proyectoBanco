import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.scss']
})
export class ConsultarUsuarioComponent implements OnInit {

  public usuario: Usuario;
  usuariosObtenidos: Usuario[];

  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
    this.usuariosObtenidos = [];
  }

  ngOnInit(): void {}


  consultarUsuario(): void {
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

  limpiarCampos():void{
    this.usuario=new Usuario();
  }


}
