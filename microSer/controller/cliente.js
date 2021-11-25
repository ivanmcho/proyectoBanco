const conexion= require('../utils/conexion').pool;

/* metodo que consulta un ususario por login */

/**
 * Metodo que registra un nuevo usuario
 * @param {*} request 
 * @param {*} response 
 */
 exports.registrarCliente = (request, response) => {
    let nit_cliente = request.body.nit;
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let telefono = request.body.numero;
    let Genero = request.body.genero;
    let edad = request.body.edad;
    let direccion = request.body.direccion;
//let DPI = request.body.dpi;
    let fechaNac = request.body.fechaNac;
    let correo = request.body.correo;
    let idEstado = request.body.estado;
    conexion.query('insert into proyectouvg.cliente (nit_cliente,nombre, apellido, telefono,edad,genero,correo,direccion,fecha_nacimiento,id_estado) values (?,?,?,?,?,?,?,?,?,?)', [nit_cliente,nombre, apellido,telefono,edad,Genero,correo,direccion,fechaNac, idEstado], (error, result) => {
        if(error){
         throw error;
          // response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });
};



exports.consultarCliente = (request, response) => {
    let nit_cliente = request.params.nit;
   // console.log("nit: "+nit_cliente)
    //nit_cliente ,nombre, apellido,telefono,edad,genero,correo,direccion,fecha_nacimiento,id_estado 
    conexion.query('select * from proyectouvg.cliente where nit_cliente = ?',
     [nit_cliente], (error, result) => {
        if(error){
         throw error;
         response.send(result);
        } else{
            response.send(result);
        }
    });
};



exports.actualizarCliente = (request, response) => {
   // console.log("nit: "+request.params.nit)
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let telefono = request.body.numero;
    let Genero = request.body.genero;
    let edad = request.body.edad;
    let direccion = request.body.direccion;
    let nit_cliente = request.body.nit;
   // let DPI = request.body.dpi;
    let fechaNac = request.body.fechaNac;
    let correo = request.body.correo;
    let idEstado = request.body.estado;
 console.log("correo: "+correo)
    conexion.query('UPDATE proyectouvg.cliente SET nombre = ?,apellido = ?,telefono = ?,edad = ?,genero = ?,correo = ?,direccion = ?,fecha_nacimiento = ?,id_estado = ? WHERE nit_cliente = ?', [nombre, apellido,telefono,edad,Genero,correo,direccion,fechaNac, idEstado,nit_cliente], (error, result) => {
        if(error){
          throw error;
         //  response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });
};


exports.eliminarCliente = (request, response) => {
    let nit_cliente = request.body.nit;
    conexion.query('DELETE from proyectouvg.cliente WHERE nit_cliente = ?', [nit_cliente], (error, result) => {
        if(error){
         //   throw error;
           response.send(result);
        } else{
 //  response.send('Usuario creado correctamente');
 response.send(result);
        }
    });

}