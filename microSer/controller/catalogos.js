const conexion= require('../utils/conexion').pool;

exports.consultarCatalogoRol= (request, response) => {
    let institucion= request.params.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='select * from banco.rol';
            break;
        case'cooperativa':
        query='select * from cooperativa.rol';
            break;
        default:
            break;
    }
    conexion.query(query,
     (error, result) => {
        if(error){
         throw error;
         response.send(result);
        } else{
            response.send(result);
        }
    });
};



exports.consultarCatalogoEstados= (request, response) => {
    let institucion= request.params.institucion;
    let query ='';
    switch (institucion) {
        case 'banco':
            query='select * from banco.estado';
            break;
        case'cooperativa':
        query='select * from cooperativa.estado';
            break;
        default:
            break;
    }
    conexion.query(query,
     (error, result) => {
        if(error){
         throw error;
         response.send(result);
        } else{
            response.send(result);
        }
    });
};





