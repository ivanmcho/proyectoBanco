import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/core/models/empleado/empleado';
import { EmpleadoService } from 'src/app/core/services/empleado/empleado.service';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.scss']
})
export class EliminarEmpleadoComponent implements OnInit {

  public empleado: Empleado;
  public empleadoConsultado: string='';
  empleadosObtenidos: Empleado[];

  constructor( private empleadoService: EmpleadoService) {
    this.empleado = new Empleado();
    this.empleadosObtenidos = [];
  //  this.Empleado.nombre="hello"
  }

  actualizarEmpleado(): void {
      if (this.empleadoConsultado!='') {
      this.empleadoService.actualizarEmpleado(this.empleado,this.empleadoConsultado).subscribe(data => {
        alert('ejecucion')
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

  eliminarEmpleado(): void {
       if (this.empleado.user!='') {
      this.empleadoService.eliminarEmpleado(this.empleado,this.empleadoConsultado).subscribe(data => {
        if (data  != null) {
          alert("empleado Eliminado Exitosamente")
          this.limpiarCampos()
        }else{
          alert("Empleado no Eliminado")
          this.limpiarCampos()
        }
        });
    }else{
      alert('Consulte primero un login_name por favor')
    }
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
            alert('Error al consultar el empleado');
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
