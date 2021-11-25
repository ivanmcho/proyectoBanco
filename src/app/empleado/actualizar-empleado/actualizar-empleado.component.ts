import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/core/models/empleado/empleado';
import { EmpleadoService } from 'src/app/core/services/empleado/empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.scss']
})
export class ActualizarEmpleadoComponent implements OnInit {

  public empleado: Empleado;
  public empleadoConsultado: string='';
  empleadosObtenidos: Empleado[];
  constructor( private empleadoService: EmpleadoService) {
    this.empleado = new Empleado();
    this.empleadosObtenidos = [];

  }

  actualizarEmpleado(): void {
      if (this.empleadoConsultado!='') {
      this.empleadoService.actualizarEmpleado(this.empleado,this.empleadoConsultado).subscribe(data => {
        if (data  != null) {
          alert("empleado Actualizado Exitosamente")
          this.limpiarCampos()
        }else{
          alert("empleado no Actualizado")
          this.limpiarCampos()
        }
        });
    }else{
      alert('Consulte primero un login_name por favor')
    }
  }

  limpiarCampos():void{
    this.empleado=new Empleado();
    this.empleadoConsultado='';

  }


  consultarEmpleado(): void {
    this.empleadoConsultado=this.empleado.user;
    this.empleadoService.consultarEmpleado(this.empleado).subscribe(
      (res) => {
        const data: any = res;
        this.empleadosObtenidos = data;
        if (this.empleadosObtenidos != null) {
          console.log(this.empleadosObtenidos);
          if (this.empleadosObtenidos.length == 0) {
            alert('Error al consultar el Empleado');
            this.limpiarCampos();
          } else {
            console.log(this.empleadosObtenidos);
            this.empleado.pass = data[0].password,
            this.empleado.nombre = data[0].nombre_empleado,
            this.empleado.apellido = data[0].apellido_empleado,
            this.empleado.idRol = data[0].id_rol,
            this.empleado.idEstado = data[0].id_estado
          }
        }
      },
      (error) => {
        alert('Error al consultar el empleado');
      }
    );
}
ngOnInit(): void {
}

}
