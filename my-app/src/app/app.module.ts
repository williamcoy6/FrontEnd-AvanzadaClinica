import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { CrearMedicoComponent } from './pagina/crear-medico/crear-medico.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';
import { CrearCitasComponent } from './pagina/crear-citas/crear-citas.component';
import { EditarPerfilComponent } from './pagina/editar-perfil/editar-perfil.component';
import { EditarUsuarioComponent } from './pagina/editar-usuario/editar-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    GestionPqrsComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    AlertaComponent,
    CrearMedicoComponent,
    GestionCitasComponent,
    CrearCitasComponent,
    EditarPerfilComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
