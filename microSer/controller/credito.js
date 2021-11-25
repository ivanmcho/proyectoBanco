const conexion= require('../utils/conexion').pool;

/* metodo que consulta un ususario por login */

/**
 * Metodo que registra un nuevo empleado
 * @param {*} request 
 * @param {*} response 
 */
 exports.registrarCredito = (request, response) => {
    let dpi_usuario = request.body.dpi_usuario;//importante
    let cantidad_credito = request.body.cantidad_credito;
    let cuotas_credito = request.body.cuotas_credito;
    let idEstado = request.body.idEstado;
    let id_empleado = request.body.id_empleado;
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='insert into banco.credito (dpi_usuario, cantidad_credito, cuotas_credito,id_estado,id_empleado) values (?,?,?,?,?)';
            break;
        case'cooperativa':
        query='insert into cooperativa.credito (dpi_usuario, cantidad_credito, cuotas_credito, id_estado,id_empleado) values (?,?,?,?,?)';
            break;
        default:
            break;
        
    }
    conexion.query(query, [dpi_usuario, cantidad_credito,cuotas_credito,idEstado, id_empleado], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('credito creado correctamente');
 response.send(result);
        }
    });
};




/**
 * Metodo que consulta los Creditos del sistema
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarCredito = (request, response) => {
    console.log("HOLAAA");
    console.log(request.params)
    let dpi_usuario = request.params.dpi_usuario;
    let id_credito = request.params.id_credito;
    let institucion= request.params.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='select dpi_usuario, cantidad_credito, cuotas_credito,id_estado,id_empleado from banco.credito where dpi_usuario = ?  && id_credito= ? ';
            break;
        case'cooperativa':
        query='select dpi_usuario, cantidad_credito, cuotas_credito,id_estado,id_empleado from cooperativa.credito where dpi_usuario = ?  && id_credito= ? ';
            break;
        default:
            break;
    }
    console.log("SQL:", query);
    conexion.query(query,
    [dpi_usuario,id_credito], (error, result) => {
        if(error){
        throw error;
        response.send(result);
        } else{
            console.log(result.dpi_usuario)
            response.send(result);
        }
    });
};

exports.actualizarCredito = (request, response) => {
    let dpi_usuario = request.body.dpi_usuario;//importante
    let cantidad_credito = request.body.cantidad_credito;
    let cuotas_credito = request.body.cuotas_credito;
    let idEstado = request.body.estado;
    let id_empleado = request.body.id_empleado;
    let institucion= request.body.institucion;           
    let query ='';
    switch (institucion) {
        case 'banco':
            query='UPDATE banco.credito SET dpi_usuario = ?, cantidad_credito = ?, cuotas_credito = ?,id_estado = ?,id_empleado = ? where dpi_usuario = ? ';
            break;
        case'cooperativa':
        query='UPDATE cooperativa.credito SET dpi_usuario = ?, cantidad_credito = ?, cuotas_credito = ?,id_estado = ?,id_empleado = ? where dpi_usuario = ? ';
            break;
        default:
            break;
    }
    conexion.query(query, [dpi_usuario, cantidad_credito,cuotas_credito,idEstado, id_empleado,dpi_usuario], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('empleado creado correctamente');
 response.send(result);
        }
    });
};



exports.eliminarCredito = (request, response) => {
    let dpi_usuario= request.body.dpi_usuario;
    let id_credito = request.body.id_credito;//importante
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='UPDATE banco.credito SET id_estado = ? WHERE dpi_usuario = ?  && id_credito = ? && id_estado = 1';
            break;
        case'cooperativa':
        query='UPDATE cooperativa.credito SET id_estado = ? WHERE dpi_usuario = ?  && id_credito = ? && id_estado = 1';
            break;
        default:
            break;
    }
    conexion.query(query, [2,dpi_usuario,id_credito], (error, result) => {
        if(error){
            throw error;
           response.send(result);
        } else{
 //  response.send('empleado creado correctamente');
 response.send(result);
        }
    });
};