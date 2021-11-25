
export class Login {
  user: string;
  pass: string;
  nombre: string;
  apellido: string;
  idRol: number;
  idEstado: number;

  constructor(user = '', pass = '', nombre = '', apellido = '', idRol = 0, idEstado = 0){
    this.user = user;
    this.pass = pass;
    this.nombre = nombre;
    this.apellido = apellido;
    this.idRol = idRol;
    this.idEstado = idEstado;
  }}
