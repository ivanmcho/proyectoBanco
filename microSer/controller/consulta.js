const conexion= require('../utils/conexion').pool;

/* metodo que consulta un ususario por login */

/**
 * Metodo que registra un nuevo usuario
 * @param {*} request 
 * @param {*} response 
 */

 exports.registrarConsulta = (request, response) => {
    let dpi_usuario = request.body.dpi_usuario;
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let tieneCredito= request.body.tieneCredito;
    let estadoCredito = request.body.estadoCredito;
    let institucion= request.body.institucion;          
    let query ='';
    switch (institucion) {
        case 'banco':
            query='insert into banco.consulta (dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito) values (?,?,?,?,?)';
            break;
        case'cooperativa':
        query='insert into cooperativa.consulta (dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito) values (?,?,?,?,?)';
            break;
        default:
            break;
    }
    conexion.query(query, [dpi_usuario,nombre, apellido,tieneCredito,estadoCredito], (error, result) => {
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
 * Metodo que consulta los usuarios del sistema
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarConsulta = (request, response) => {
    let dpi_usuario = request.params.dpi_usuario;
    let institucion= request.params.institucion;
    let id_consulta = request.params.id_consulta;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='select dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito from banco.consulta where dpi_usuario = ? && id_consulta= ?';
            break;
        case'cooperativa':
        query='select dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito from cooperativa.consulta where dpi_usuario = ? && id_consulta = ?';
            break;
        default:
            break;
    }
    conexion.query(query,
    [dpi_usuario,id_consulta], (error, result) => {
        if(error){
            throw error;
            response.send(result);
        } else{
            response.send(result);
        }
    });
};

exports.consultarConsultaGeneral = (request, response) => {
    let institucion= request.params.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='select dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito from banco.consulta';
            break;
        case'cooperativa':
        query='select dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito from cooperativa.consulta';
            break;
        default:
            break;
    }
    conexion.query(query,
    [dpi_usuario,id_consulta], (error, result) => {
        if(error){
            throw error;
            response.send(result);
        } else{
            response.send(result);
        }
    });
};

exports.actualizarConsulta = (request, response) => {
    let id_consulta = request.body.id_consulta;
    let dpi_usuario = request.body.dpi_usuario;
    let nombre = request.body.nombres;
    let apellido = request.body.apellidos;
    let tieneCredito= request.body.tieneCredito;
    let estadoCredito = request.body.estadoCredito;
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='UPDATE banco.consulta SET nombre_usuario = ?,apellido_usuario= ?,tiene_credito =?, estado_credito  = ? WHERE dpi_usuario = ? && id_consulta= ?';
            break;
        case'cooperativa':
        query='UPDATE cooperativa.consulta SET nombre_usuario = ?,apellido_usuario= ?,tiene_credito = ?, estado_credito  = ?,id_rol = ?,id_estado = ? WHERE dpi_usuario = ? && id_consulta= ?';
            break;
        default:
            break;
    }
    conexion.query(query, [nombre, apellido,tieneCredito,estadoCredito,dpi_usuario,id_consulta], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('usuario creado correctamente');
 response.send(result);
        }
    });
};



exports.eliminarConsulta = (request, response) => {
    let id_consulta = request.body.id_consulta;
    let dpi_usuario = request.body.dpi_usuario;//importante
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='UPDATE banco.consulta SET id_estado = ? WHERE dpi_usuario = ? && id_consulta= ?';
            break;
        case'cooperativa':
        query='UPDATE cooperativa.consulta SET id_estado = ? WHERE dpi_usuario = ? && id_consulta= ?';
            break;
        default:
            break;
    }
    conexion.query(query, [2,dpi_usuario,id_consulta], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('usuario creado correctamente');
 response.send(result);
        }
    });
};
