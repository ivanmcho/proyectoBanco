const gestionUsuarios = require('../controller/usuario');
const gestionClientes = require('../controller/cliente');
const gestionCatalogos = require('../controller/catalogos');
const gestionEmpleados = require('../controller/empleado');
const gestionCreditos = require('../controller/credito');
const gestionConsulta = require('../controller/consulta');
const gestionReporte = require('../controller/reporte');

const appRouter = function(app){
    //Rutas get para consultas
    app.get('/usuario/consultarUsuarioLogin/:login-:pass-:institucion', gestionUsuarios.consultarUsuarioLogin);
  //  app.get('/usuario/consultarUsuarios/:login', gestionUsuarios.consultarUsuarios);
  app.get('/usuario/consultarUsuarios/:login-:institucion', gestionUsuarios.consultarUsuario);
    //Rutas post para modificaciones
    app.post('/usuario/registrarUsuario', gestionUsuarios.registrarUsuario);
    app.post('/usuario/actualizarUsuario', gestionUsuarios.actualizarUsuario);
    app.post('/usuario/eliminarUsuario', gestionUsuarios.eliminarUsuario);

   // cliente
     //Rutas get para consultas
     app.get('/cliente/consultarCliente/:nit', gestionClientes.consultarCliente);
 //Rutas post para modificaciones
      app.post('/cliente/registrarCliente', gestionClientes.registrarCliente);
      app.post('/cliente/actualizarCliente', gestionClientes.actualizarCliente);
      app.post('/cliente/eliminarCliente', gestionClientes.eliminarCliente);
// Catalogos
     //Rutas get para consultas
     app.get('/catalogos/consultarCatalogoRol/:institucion', gestionCatalogos.consultarCatalogoRol);
     app.get('/catalogos/consultarCatalogoEstado/:institucion', gestionCatalogos.consultarCatalogoEstados);
     
     // Empleados
     //Rutas get para empleados
     app.post('/empleado/registrarEmpleado', gestionEmpleados.registrarEmpleado);
     app.get('/empleado/consultarEmpleadoLogin/:login-:pass-:institucion', gestionEmpleados.consultarEmpleadoLogin);
     app.get('/empleado/consultarEmpleado/:login-:institucion', gestionEmpleados.consultarEmpleado);
    // app.get('/cliente/consultarCliente/:nit', gestionClientes.consultarCliente);
     app.post('/empleado/actualizarEmpleado', gestionEmpleados.actualizarEmpleado);
     app.post('/empleado/eliminarEmpleado', gestionEmpleados.eliminarEmpleado);
     
      // Creditos
     //Rutas get para creditos
     app.post('/credito/registrarCredito', gestionCreditos.registrarCredito);
     app.get('/credito/consultarCredito/:dpi_usuario-:id_credito-:institucion', gestionCreditos.consultarCredito);
     app.post('/credito/actualizarCredito', gestionCreditos.actualizarCredito);
     app.post('/credito/eliminarCredito', gestionCreditos.eliminarCredito);
     
         // Consultas
     //Rutas get para consultas
     app.post('/consulta/registrarConsulta', gestionConsulta.registrarConsulta);
     app.get('/consulta/consultarConsulta/:dpi_usuario-:institucion-:id_consulta', gestionConsulta.consultarConsulta);
     app.get('/consulta/consultarConsulta/:institucion', gestionConsulta.consultarConsultaGeneral);
     app.post('/consulta/actualizarConsulta', gestionConsulta.actualizarConsulta);
     app.post('/consulta/eliminarConsulta', gestionConsulta.eliminarConsulta);
     

            // Reportes
     //Rutas get para reportes
     app.post('/reporte/consultarReporteUsuario', gestionReporte.consultarReporteUsuario);
     app.post('/reporte/consultarReporteEmpleado', gestionReporte.consultarReporteEmpleado);
     app.post('/reporte/consultarReporteConsulta', gestionReporte.consultarReporteConsulta);
     app.post('/reporte/consultarReporteCredito', gestionReporte.consultarReporteCredito);

    }

module.exports = appRouter;