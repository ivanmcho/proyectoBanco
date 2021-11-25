import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MenuCuentahabienteComponent } from './menu-cuentahabiente/menu-cuentahabiente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule}from './material/material.module'
import{FormsModule}from '@angular/forms';
import { ConsultarUsuarioComponent } from './usuario/consultar-usuario/consultar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ActualizarUsuarioComponent } from './usuario/actualizar-usuario/actualizar-usuario.component';
import { ConsultarEmpleadoComponent } from './empleado/consultar-empleado/consultar-empleado.component';
import { ActualizarEmpleadoComponent } from './empleado/actualizar-empleado/actualizar-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';
import { ConsultarCreditoComponent } from './credito/consultar-credito/consultar-credito.component';
import { EliminarCreditoComponent } from './credito/eliminar-credito/eliminar-credito.component';
import { ActualizarCreditoComponent } from './credito/actualizar-credito/actualizar-credito.component';
import { ConsultarConsultaComponent } from './consulta/consultar-consulta/consultar-consulta.component';
import { RegistroConsultaComponent } from './consulta/registro-consulta/registro-consulta.component';
import { RegistroEmpleadoComponent } from './empleado/registro-empleado/registro-empleado.component';
import { RegistroCreditoComponent } from './credito/registro-credito/registro-credito.component';
import { RegistroUsuarioComponent } from './usuario/registro-usuario/registro-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ReporteUsuarioComponent } from './reportes/reporte-usuario/reporte-usuario.component';
import { ReporteCreditoComponent } from './reportes/reporte-credito/reporte-credito.component';
import { ReporteEmpleadoComponent } from './reportes/reporte-empleado/reporte-empleado.component';
import { ReporteConsultaComponent } from './reportes/reporte-consulta/reporte-consulta.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuAdministradorComponent,
    MenuCuentahabienteComponent,
    ConsultarUsuarioComponent,
    EliminarUsuarioComponent,
    ActualizarUsuarioComponent,
    ConsultarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EliminarEmpleadoComponent,
    ConsultarCreditoComponent,
    EliminarCreditoComponent,
    ActualizarCreditoComponent,
    ConsultarConsultaComponent,
    RegistroConsultaComponent,
    RegistroEmpleadoComponent,
    RegistroCreditoComponent,
    RegistroUsuarioComponent,
    ReporteUsuarioComponent,
    ReporteCreditoComponent,
    ReporteEmpleadoComponent,
    ReporteConsultaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
