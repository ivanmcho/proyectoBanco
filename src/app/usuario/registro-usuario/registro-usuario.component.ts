import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {
  public usuario: Usuario;
  public registro:String='';


  constructor( private usuarioService:UsuarioService) {
    this.usuario = new Usuario();
  }
  limpiarCampos():void{
    this.usuario=new Usuario();

  }

registrarUsuario(){
if(this.usuario.user!=null && this.usuario.pass!=null && this.usuario.nombre!=null && this.usuario.apellido!=null &&
  this.usuario.idRol!=0 && this.usuario.idEstado!=0){
      this.usuarioService.registrarUsuario(this.usuario).subscribe(data => {
      if (data  != null) {
        alert("Usuario Registrado Exitosamente")
        this.limpiarCampos()
      }else{
        alert("Usuario no Registrado")
        this.limpiarCampos()
      }
      });
}else{
  alert("Los campos faltantes son obligatorios (*)")
}

}

  ngOnInit(): void {
  }

}
