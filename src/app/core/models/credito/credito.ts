export class Credito {
  id_credito:Number;
  dpi_usuario: string;
  cantidad_credito: Number;
  cuotas_credito: Number;
  idEstado: number;
  id_empleado:number;

  constructor(id_credito = 0, dpi_usuario = '', cantidad_credito = 0, cuotas_credito = 0,id_empleado=0,  idEstado = 0){
    this.id_credito = id_credito;
    this.dpi_usuario = dpi_usuario;
    this.cantidad_credito = cantidad_credito;
    this.cuotas_credito = cuotas_credito;
    this.id_empleado = id_empleado;
    this.idEstado = idEstado;
  }
}
