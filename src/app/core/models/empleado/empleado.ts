export class Empleado {
  id_empleado:number;
  user: string;
  pass: string;
  nombre: string;
  apellido: string;
  idRol: number;
  idEstado: number;

  constructor(id_empleado=0,user = '', pass = '', nombre = '', apellido = '', idRol = 0, idEstado = 0){
    this.id_empleado=id_empleado;
    this.user = user;
    this.pass = pass;
    this.nombre = nombre;
    this.apellido = apellido;
    this.idRol = idRol;
    this.idEstado = idEstado;
  }
}
