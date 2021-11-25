const conexion= require('../utils/conexion').pool;

/* metodo que consulta un ususario por login */

/**
 * Metodo que registra un nuevo empleado
 * @param {*} request 
 * @param {*} response 
 */
 exports.registrarEmpleado = (request, response) => {
    let login = request.body.login;//importante
    let pass = request.body.clave;
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let idRol = request.body.rol;
    let idEstado = request.body.estado;
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='insert into banco.empleado (login_name, password, nombre_empleado, apellido_empleado, id_rol, id_estado) values (?,?,?,?,?,?)';
            break;
        case'cooperativa':
        query='insert into cooperativa.empleado (login_name, password, nombre_empleado, apellido_empleado, id_rol, id_estado) values (?,?,?,?,?,?)';
            break;
        default:
            break;
    }
    conexion.query(query, [login, pass, nombre, apellido, idRol, idEstado], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('empleado creado correctamente');
 response.send(result);
        }
    });
};


/**
 * Metodo que consulta un empleado por Login
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarEmpleado = (request, response) => {
    let loginName = request.params.login;
    let password = request.params.pass;
    conexion.query('select id_empleado, login_name, password, nombre_empleado, apellido_empleado, id_rol, id_estado from proyectouvg.empleado where login_name = ? and password= ? and id_estado = 1',
     [loginName,password], (error, result) => {
        if(error){
         throw error;
         response.send(result);
        } else{
            response.send(result);
        }
    });
};




/**
 * Metodo que consulta los empleados del sistema
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarEmpleadoLogin = (request, response) => {
    let loginName = request.params.login;
    let password = request.params.pass;
    let institucion= request.params.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='select * from banco.empleado where login_name = ? and password= ? and id_estado = 1';
            break;
        case'cooperativa':
        query='select * from cooperativa.empleado where login_name = ? and password= ? and id_estado = 1';
            break;
        default:
            break;
    }
    conexion.query(query,
    [loginName,password], (error, result) => {
        if(error){
            throw error;
            response.send(result);
        } else{
            response.send(result);
        }
    });
};


/**
 * Metodo que consulta los empleados del sistema
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarEmpleado = (request, response) => {
    let loginName = request.params.login;
    let institucion= request.params.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='select id_empleado,login_name, password, nombre_empleado, apellido_empleado, id_rol, id_estado from banco.empleado where login_name = ?  && id_estado=1';
           // query='select id_empleado,login_name, password, nombre_empleado, apellido_empleado, id_rol, id_estado from banco.empleado where login_name = ?  && id_estado=1';  like '%$nombre%'         
            break;
        case'cooperativa':
        query='select id_empleado,login_name, password, nombre_empleado, apellido_empleado, id_rol, id_estado from cooperativa.empleado where login_name = ?  && id_estado=1';
            break;
        default:
            break;
    }
    conexion.query(query,
    [loginName], (error, result) => {
        if(error){
      //      throw error;
         //   response.send(result);
        } else{
            response.send(result);
        }
    });
};

exports.actualizarEmpleado = (request, response) => {
    let login = request.body.login;//importante
    let pass = request.body.clave;
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let idRol = request.body.rol;
    let idEstado = request.body.estado;
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='UPDATE banco.empleado SET password = ?,nombre_empleado = ?,apellido_empleado= ?,id_rol = ?,id_estado = ? WHERE login_name = ? ';
            break;
        case'cooperativa':
        query='UPDATE cooperativa.empleado SET password = ?,nombre_empleado = ?,apellido_empleado= ?,id_rol = ?,id_estado = ? WHERE login_name = ?  ';
            break;
        default:
            break;
    }
    conexion.query(query, [pass, nombre, apellido, idRol, idEstado,login], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('empleado creado correctamente');
 response.send(result);
        }
    });
};



exports.eliminarEmpleado = (request, response) => {
    let login = request.body.login;//importante
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='UPDATE banco.empleado SET id_estado = ? WHERE login_name = ? && id_estado = 1';
            break;
        case'cooperativa':
        query='UPDATE cooperativa.empleado SET id_estado = ? WHERE login_name = ? && id_estado = 1';
            break;
        default:
            break;
    }
    conexion.query(query, [2,login], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('empleado creado correctamente');
 response.send(result);
        }
    });
};