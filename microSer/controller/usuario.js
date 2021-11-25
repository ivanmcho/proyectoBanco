const conexion= require('../utils/conexion').pool;

/* metodo que consulta un ususario por login */

/**
 * Metodo que registra un nuevo usuario
 * @param {*} request 
 * @param {*} response 
 */

 exports.registrarUsuario = (request, response) => {
    let login = request.body.login;//importante
    let pass = request.body.clave;
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let ahorro= request.body.ahorro;
    let telefono= request.body.telefono;
    let direccion= request.body.direccion;
    let idRol = request.body.rol;
    let idEstado = request.body.estado;
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='insert into banco.usuario (dpi_usuario, password, nombre_usuario, apellido_usuario,ahorro_usuario,telefono_usuario,direccion_usuario, id_rol, id_estado) values (?,?,?,?,?,?,?,?,?)';
            break;
        case'cooperativa':
        query='insert into cooperativa.usuario (dpi_usuario, password, nombre_usuario, apellido_usuario,ahorro_usuario,telefono_usuario,direccion_usuario, id_rol, id_estado) values (?,?,?,?,?,?,?,?,?)';
            break;
        default:
            break;
    }
    conexion.query(query, [login, pass, nombre, apellido,ahorro,telefono,direccion,idRol, idEstado], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('usuario creado correctamente');
 response.send(result);
        }
    });
};


/**
 * Metodo que consulta un usuario por Login
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarUsuarioLogin = (request, response) => {
    let loginName = request.params.login;
    let password = request.params.pass;
        let institucion= request.params.institucion;
        let query ='';
        switch (institucion) {
            case 'banco':
                query='select * from banco.usuario where dpi_usuario = ? and password= ? and id_estado = 1';
                break;
            case'cooperativa':
            query='select * from cooperativa.usuario where dpi_usuario = ? and password= ? and id_estado = 1';
                break;
            default:
                break;
        }
        conexion.query(query,
        [loginName,password], (error, result) => {
            if(error){
                throw error;
             //   response.send(result);
            } else{
                response.send(result);
            }
        });
};


/**
 * Metodo que consulta los usuarios del sistema
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarUsuario = (request, response) => {
    let loginName = request.params.login;
    let institucion= request.params.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='select dpi_usuario, password, nombre_usuario, apellido_usuario,ahorro_usuario,telefono_usuario,direccion_usuario,id_rol, id_estado from banco.usuario where dpi_usuario = ?  && id_estado=1';
            break;
        case'cooperativa':
        query='select dpi_usuario, password, nombre_usuario, apellido_usuario,ahorro_usuario,telefono_usuario,direccion_usuario,id_rol, id_estado from cooperativa.usuario where dpi_usuario = ?  && id_estado=1';
            break;
        default:
            break;
    }
    conexion.query(query,
    [loginName], (error, result) => {
        if(error){
            throw error;
         //   response.send(result);
        } else{
            response.send(result);
        }
    });
};

exports.actualizarUsuario = (request, response) => {
    let login = request.body.login;//importante
    let pass = request.body.clave;
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let ahorro= request.body.ahorro;
    let telefono= request.body.telefono;
    let direccion= request.body.direccion;
    let idRol = request.body.rol;
    let idEstado = request.body.estado;
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='UPDATE banco.usuario SET password = ?,nombre_usuario = ?,apellido_usuario= ?,ahorro_usuario = ?,telefono_usuario = ?,direccion_usuario= ?,id_rol = ?,id_estado = ? WHERE dpi_usuario = ? ';
            break;
        case'cooperativa':
        query='UPDATE cooperativa.usuario SET password = ?,nombre_usuario = ?,apellido_usuario= ?,ahorro_usuario =? ,telefono_usuario = ?,direccion_usuario = ?,id_rol = ?,id_estado = ? WHERE dpi_usuario = ?  ';
            break;
        default:
            break;
    }
    conexion.query(query, [pass, nombre, apellido,ahorro,telefono,direccion,idRol, idEstado,login], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('usuario creado correctamente');
 response.send(result);
        }
    });
};



exports.eliminarUsuario = (request, response) => {
    let login = request.body.login;//importante
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='UPDATE banco.usuario SET id_estado = ? WHERE dpi_usuario = ? && id_estado = 1';
            break;
        case'cooperativa':
        query='UPDATE cooperativa.usuario SET id_estado = ? WHERE dpi_usuario = ? && id_estado = 1';
            break;
        default:
            break;
    }
    conexion.query(query, [2,login], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('usuario creado correctamente');
 response.send(result);
        }
    });
};
