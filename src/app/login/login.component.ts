import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../core/models/usuario/usuario';
import { EmpleadoService } from '../core/services/empleado/empleado.service';
import { UsuarioService } from '../core/services/usuario/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  usuariosObtenidos: Usuario[];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private empleadoService: EmpleadoService
  ) {
    this.usuario = new Usuario();
    this.usuariosObtenidos = [];
  }

  /**
   * Metodo que realiza la validacion del login e invoca el servicio correspondiente
   */

  validarLoginUsuario() {
    this.usuarioService.consultarUsuarioLogin(this.usuario.user,this.usuario.pass).subscribe(
      (res) => {
        const data: any = res;
        this.usuariosObtenidos = data;
        if (this.usuariosObtenidos != null) {
          console.log(this.usuariosObtenidos);
          if (this.usuariosObtenidos.length == 0) {
          //  alert('Error al consultar el usuario');

          } else {
            console.log(this.usuariosObtenidos);
            this.router.navigateByUrl('/menu-usuario');
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
    this.validarLoginEmpleado();
  }

  validarLoginEmpleado() {
    console.log('empleado');
    this.empleadoService.consultarEmpleadoLogin(this.usuario.user,this.usuario.pass).subscribe(
      (res) => {
        const data: any = res;
        console.log('empleado 2');
        this.usuariosObtenidos = data;
        if (this.usuariosObtenidos != null) {
          console.log(this.usuariosObtenidos);
          if (this.usuariosObtenidos.length == 0) {
            alert('Error al consultar el usuario');
          } else {
            console.log(this.usuariosObtenidos);
            this.router.navigateByUrl('/menu-administrador');
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }

  ngOnInit(): void {}
}
