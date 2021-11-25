import { Component, OnInit } from '@angular/core';
import { Credito } from 'src/app/core/models/credito/credito';
import { CreditoService } from 'src/app/core/services/credito/credito.service';

@Component({
  selector: 'app-registro-credito',
  templateUrl: './registro-credito.component.html',
  styleUrls: ['./registro-credito.component.scss']
})

export class RegistroCreditoComponent implements OnInit {
  public credito: Credito;
  public registro:String='';
  constructor( private creditoService:CreditoService) {
    this.credito = new Credito();
  }
  limpiarCampos():void{
    this.credito=new Credito();

  }

  registrarCredito(){
    console.log("ESTADO: ____", this.credito.idEstado);
    if(this.credito.dpi_usuario!=null && this.credito.cantidad_credito!=null && this.credito.cuotas_credito!=null && this.credito.id_empleado!=null &&
       this.credito.idEstado!=0){
          this.creditoService.registrarCredito(this.credito).subscribe(data => {
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
