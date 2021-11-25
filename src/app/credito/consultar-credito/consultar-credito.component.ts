import { Component, OnInit } from '@angular/core';
import { Credito } from 'src/app/core/models/credito/credito';
import { CreditoService } from 'src/app/core/services/credito/credito.service';


@Component({
  selector: 'app-consultar-credito',
  templateUrl: './consultar-credito.component.html',
  styleUrls: ['./consultar-credito.component.scss']
})
export class ConsultarCreditoComponent implements OnInit {
  public detInstitucion;
  public credito: Credito;
  creditosObtenidos: Credito[];

  constructor( private creditoService:CreditoService) {
    this.credito = new Credito();
    this.creditosObtenidos = [];
    this.detInstitucion;
  }
  limpiarCampos():void{
    this.credito=new Credito();

  }

  consultarCredito(): void {
    this.creditoService.consultarCredito(this.credito, this.detInstitucion).subscribe(
      (res) => {
        const data: any = res;
        this.creditosObtenidos = data;
        if (this.creditosObtenidos != null) {
          console.log(this.creditosObtenidos);
          if (this.creditosObtenidos.length == 0) {
            alert('Error al consultar el empleado');
            this.limpiarCampos();
          } else {
            console.log(this.creditosObtenidos);
            this.credito.dpi_usuario = data[0].dpi_usuario,
            this.credito.cantidad_credito = data[0].cantidad_credito,
            this.credito.idEstado= data[0].id_estado,
            this.credito.id_empleado = data[0].id_empleado
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
