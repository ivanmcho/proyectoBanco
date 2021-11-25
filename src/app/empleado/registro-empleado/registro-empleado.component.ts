import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/core/models/empleado/empleado';
import { EmpleadoService } from 'src/app/core/services/empleado/empleado.service';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.scss']
})
export class RegistroEmpleadoComponent implements OnInit {
  public empleado: Empleado;
  public registro:String='';


  constructor( private empleadoService:EmpleadoService) {
    this.empleado = new Empleado();
  }
  limpiarCampos():void{
    this.empleado=new Empleado();

  }

registrarEmpleado(){
if(this.empleado.user!=null && this.empleado.pass!=null && this.empleado.nombre!=null && this.empleado.apellido!=null &&
  this.empleado.idRol!=0 && this.empleado.idEstado!=0){

      this.empleadoService.registrarEmpleado(this.empleado).subscribe(data => {
      if (data  != null) {
        alert("Empleado Registrado Exitosamente")
        this.limpiarCampos()
      }else{
        alert("Empleado no Registrado")
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
