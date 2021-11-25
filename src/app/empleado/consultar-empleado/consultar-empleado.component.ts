import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/core/models/empleado/empleado';
import { EmpleadoService } from 'src/app/core/services/empleado/empleado.service';

@Component({
  selector: 'app-consultar-empleado',
  templateUrl: './consultar-empleado.component.html',
  styleUrls: ['./consultar-empleado.component.scss']
})
export class ConsultarEmpleadoComponent implements OnInit {

  public empleado: Empleado;
  empleadosObtenidos: Empleado[];

  constructor(private empleadoService: EmpleadoService) {
    this.empleado = new Empleado();
    this.empleadosObtenidos = [];
  }

  ngOnInit(): void {}


  consultarEmpleado(): void {
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

  limpiarCampos():void{
    this.empleado=new Empleado();
  }


}
