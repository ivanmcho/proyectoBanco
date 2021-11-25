import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCreditoComponent } from './credito/registro-credito/registro-credito.component';
import { ConsultarConsultaComponent } from './consulta/consultar-consulta/consultar-consulta.component';
import { ActualizarCreditoComponent } from './credito/actualizar-credito/actualizar-credito.component';
import { ConsultarCreditoComponent } from './credito/consultar-credito/consultar-credito.component';
import { EliminarCreditoComponent } from './credito/eliminar-credito/eliminar-credito.component';
import { ActualizarEmpleadoComponent } from './empleado/actualizar-empleado/actualizar-empleado.component';
import { ConsultarEmpleadoComponent } from './empleado/consultar-empleado/consultar-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';
import { RegistroEmpleadoComponent } from './empleado/registro-empleado/registro-empleado.component';
import { LoginComponent } from './login/login.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MenuCuentahabienteComponent } from './menu-cuentahabiente/menu-cuentahabiente.component';
import { ReporteConsultaComponent } from './reportes/reporte-consulta/reporte-consulta.component';
import { ReporteCreditoComponent } from './reportes/reporte-credito/reporte-credito.component';
import { ReporteEmpleadoComponent } from './reportes/reporte-empleado/reporte-empleado.component';
import { ReporteUsuarioComponent } from './reportes/reporte-usuario/reporte-usuario.component';
import { ActualizarUsuarioComponent } from './usuario/actualizar-usuario/actualizar-usuario.component';
import { ConsultarUsuarioComponent } from './usuario/consultar-usuario/consultar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { RegistroUsuarioComponent } from './usuario/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu-usuario',
    component: MenuCuentahabienteComponent
  },
  {
    path: 'menu-administrador',
    component: MenuAdministradorComponent,
  },
  {
    path: 'registro-usuario',
    component: RegistroUsuarioComponent,
  },
  {
    path: 'consulta-usuario',
    component: ConsultarUsuarioComponent,
  },
  {
    path: 'actualizar-usuario',
    component: ActualizarUsuarioComponent,
  },

  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent,
  },

  {
    path: 'registro-empleado',
    component: RegistroEmpleadoComponent,
  },
  {
    path: 'consulta-empleado',
    component: ConsultarEmpleadoComponent,
  },
  {
    path: 'actualizar-empleado',
    component: ActualizarEmpleadoComponent,
  },

  {
    path: 'eliminar-empleado',
    component: EliminarEmpleadoComponent,
  },


  {
    path: 'registro-credito',
    component: RegistroCreditoComponent,
  },
  {
    path: 'consulta-credito',
    component: ConsultarCreditoComponent,
  },
  {
    path: 'actualizar-credito',
    component: ActualizarCreditoComponent,
  },

  {
    path: 'eliminar-credito',
    component: EliminarCreditoComponent,
  },

  {
    path: 'consulta-consulta',
    component: ConsultarConsultaComponent,
  },

  {
    path: 'reporte-consulta',
    component: ReporteConsultaComponent,
  },

  {
    path: 'reporte-credito',
    component: ReporteCreditoComponent,
  },

  {
    path: 'reporte-empleado',
    component: ReporteEmpleadoComponent,
  },

  {
    path: 'reporte-usuario',
    component: ReporteUsuarioComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
