export class Usuario {
  user: string;
  pass: string;
  nombre: string;
  apellido: string;
  ahorro_usuario:number;
  direccion: string;
  telefono: string;
  idRol: number;
  idEstado: number;

  constructor(user = '', pass = '', nombre = '', apellido = '', ahorro_usuario =0, direccion='',telefono= '', idRol = 0, idEstado = 0){
    this.user = user;
    this.pass = pass;
    this.nombre = nombre;
    this.apellido = apellido;
    this.ahorro_usuario= ahorro_usuario;
    this.direccion= direccion;
    this.telefono = telefono;
    this.idRol = idRol;
    this.idEstado = idEstado;
  }
}
