const conexion= require('../utils/conexion').pool;

/**
 * Metodo que consulta los usuarios del sistema
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarReporteUsuario = (request, response) => {
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
          //  query='select dpi_usuario, nombre_usuario, apellido_usuario,ahorro_usuario,telefono_usuario,direccion_usuario,id_rol, id_estado from banco.usuario';
          query='select dpi_usuario, nombre_usuario, apellido_usuario,ahorro_usuario,telefono_usuario,direccion_usuario,id_rol, id_estado,(SELECT nombre_estado FROM banco.estado WHERE id_estado= u.id_estado) AS estado,(SELECT nombre_rol FROM banco.rol WHERE id_rol= u.id_rol) AS rol from banco.usuario AS u';
          break;
        case'cooperativa':
       // query='select dpi_usuario, nombre_usuario, apellido_usuario,ahorro_usuario,telefono_usuario,direccion_usuario,id_rol, id_estado from cooperativa.usuario';
       query='select dpi_usuario, nombre_usuario, apellido_usuario,ahorro_usuario,telefono_usuario,direccion_usuario,id_rol, id_estado,(SELECT nombre_estado FROM cooperativa.estado WHERE id_estado= u.id_estado) AS estado,(SELECT nombre_rol FROM cooperativa.rol WHERE id_rol= u.rol) AS id_rol from cooperativa.usuario AS u';  
       break;
        default:
            break;
    }
    conexion.query(query,
    //[loginName], 
    (error, result) => {
        if(error){
            throw error;
            response.send(result);
        } else{
            response.send(result);
        }
    });
};


/**
 * Metodo que consulta los Creditos del sistema
 * @param {*} request 
 * @param {*} response 
 */
 exports.consultarReporteCredito = (request, response) => {
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
          //  query='select dpi_usuario, cantidad_credito, cuotas_credito,id_estado,id_empleado from banco.credito where dpi_usuario = ?  && id_credito= ? && id_estado=1';
         // query='select dpi_usuario, cantidad_credito, cuotas_credito,id_estado,id_empleado from banco.credito where dpi_usuario = ?  && id_credito= ? && id_estado=1';
         query='SELECT (SELECT apellido_usuario FROM banco.usuario WHERE dpi_usuario= c.dpi_usuario) AS apellido_usuario, (SELECT nombre_usuario FROM banco.usuario WHERE dpi_usuario= c.dpi_usuario) AS nombre_usuario,dpi_usuario, cantidad_credito, cuotas_credito,id_estado,(SELECT nombre_estado FROM banco.estado WHERE id_estado= c.id_estado) AS estado,(SELECT nombre_empleado FROM banco.empleado WHERE id_empleado= c.id_empleado) AS nombre_empleado,id_empleado from banco.credito AS c';
           
          break;
        case'cooperativa':
       // query='select dpi_usuario, cantidad_credito, cuotas_credito,id_estado,id_empleado from cooperativa.credito where dpi_usuario = ?  && id_credito= ? && id_estado=1';
       query='SELECT (SELECT nombre_usuario FROM cooperativa.usuario WHERE dpi_usuario= c.dpi_usuario) AS nombre_usuario,SELECT apellido_usuario FROM cooperativa.usuario WHERE dpi_usuario= c.dpi_usuario) AS apellido_usuario,dpi_usuario, cantidad_credito, cuotas_credito,id_estado,(SELECT nombre_estado FROM cooperativa.estado WHERE id_estado= c.id_estado) AS estado,(SELECT nombre_empleado FROM cooperativa.empleado WHERE id_empleado= c.id_empleado) AS nombre_empleado,id_empleado from cooperativa.credito AS c';  
       break;
        default:
            break;
    }
    conexion.query(query,
    //[dpi_usuario,id_credito], 
    (error, result) => {
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
 exports.consultarReporteEmpleado = (request, response) => {
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            //query='select id_empleado,login_name, nombre_empleado, apellido_empleado, id_rol, id_estado from banco.empleado where login_name = ?  && id_estado=1';
      //  query='select id_empleado,login_name, nombre_empleado, apellido_empleado,(SELECT nombre_estado FROM banco.estado WHERE id_estado= e.id_estado) AS id_estado,(SELECT nombre_rol FROM banco.rol WHERE id_rol= e.id_rol) AS id_rol from banco.empleado  AS ewhere login_name = ?  && id_estado=1';
    //  query='select id_empleado,login_name, nombre_empleado, apellido_empleado,(SELECT nombre_estado FROM banco.estado WHERE id_estado= e.id_estado) AS id_estado,(SELECT nombre_rol FROM banco.rol WHERE id_rol= e.id_rol) AS id_rol from banco.empleado  AS e';     
    query='select id_empleado,login_name, nombre_empleado, apellido_empleado,(SELECT nombre_estado FROM banco.estado WHERE id_estado= e.id_estado) AS id_estado,(SELECT nombre_rol FROM banco.rol WHERE id_rol= e.id_rol) AS id_rol from banco.empleado  AS e';     
      
    break;
        case'cooperativa':
        //query='select id_empleado,login_name, nombre_empleado, apellido_empleado, id_rol, id_estado from cooperativa.empleado where login_name = ?  && id_estado=1';
     //   query='select id_empleado,login_name, nombre_empleado, apellido_empleado,(SELECT nombre_estado FROM cooperativa.estado WHERE id_estado= e.id_estado) AS id_estado,(SELECT nombre_rol FROM cooperativa.rol WHERE id_rol= e.id_rol) AS id_rol from cooperativa.empleado  AS ewhere login_name = ?  && id_estado=1';
     //query='select id_empleado,login_name, nombre_empleado, apellido_empleado,(SELECT nombre_estado FROM cooperativa.estado WHERE id_estado= e.id_estado) AS id_estado,(SELECT nombre_rol FROM cooperativa.rol WHERE id_rol= e.id_rol) AS id_rol from cooperativa.empleado  AS e';   
     query='select id_empleado,login_name, nombre_empleado, apellido_empleado,(SELECT nombre_estado FROM cooperativa.estado WHERE id_estado= e.id_estado) AS id_estado,(SELECT nombre_rol FROM cooperativa.rol WHERE id_rol= e.id_rol_usuario) AS id_rol from cooperativa.empleado  AS e';    
     break;
        default:
            break;
    }
    conexion.query(query,
   // [loginName], 
    (error, result) => {
        if(error){
            throw error;
            response.send(result);
        } else{
            response.send(result);
        }
    });
};




exports.consultarReporteConsulta = (request, response) => {
    let institucion= request.body.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
        //    query='select dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito from banco.consulta';
        query='SELECT (SELECT nombre_usuario FROM banco.usuario WHERE dpi_usuario= c.dpi_usuario) AS nombre_user,dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito from banco.consulta AS c';  
        break;
        case'cooperativa':
        //query='select dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito from cooperativa.consulta';
        query='SELECT (SELECT nombre_usuario FROM banco.usuario WHERE dpi_usuario= c.dpi_usuario) AS nombre_user,dpi_usuario, nombre_usuario, apellido_usuario,tiene_credito, estado_credito from banco.consulta AS c'; 
        break;
        default:
            break;
    }
    conexion.query(query,
  //  [dpi_usuario,id_consulta],
     (error, result) => {
        if(error){
            throw error;
            response.send(result);
        } else{
            response.send(result);
        }
    });
};
