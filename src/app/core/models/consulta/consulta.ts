export class Consulta {
  id_consulta:number;
  dpi_usuario: string;
  nombre_usuario: string;
  apellido_usuario: string;
  tiene_credito: String;
  Estado_credito: String;

  constructor(id_consulta = 0, dpi_usuario = '', nombre_usuario = '', apellido_usuario = '', tiene_credito = '', Estado_credito = ''){
    this.id_consulta = id_consulta;
    this.dpi_usuario = dpi_usuario;
    this.nombre_usuario=nombre_usuario;
    this.apellido_usuario = apellido_usuario;
    this.tiene_credito = tiene_credito;
    this.Estado_credito = Estado_credito;
  }
}
