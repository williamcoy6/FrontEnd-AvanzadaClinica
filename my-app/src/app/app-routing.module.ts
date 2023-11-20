import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { CrearMedicoComponent } from './pagina/crear-medico/crear-medico.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { CrearCitasComponent } from './pagina/crear-citas/crear-citas.component';
import { EditarPerfilComponent } from './pagina/editar-perfil/editar-perfil.component';
import { EditarMedicoComponent } from './pagina/editar-medico/editar-medico.component';
import { EditarUsuarioComponent } from './pagina/editar-usuario/editar-usuario.component';
import { RecuperarContrasenaComponent } from './pagina/recuperar-contrasena/recuperar-contrasena.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "gestion-pqrs", component: GestionPqrsComponent },
  { path: "registro", component: RegistroComponent },
  { path: "crear-pqrs", component: CrearPqrsComponent },
  { path: "detalle-pqrs/:codigo", component: DetallePqrsComponent },
  { path: "gestion-medico", component: CrearMedicoComponent },
  { path: "gestion-citas", component: GestionCitasComponent },
  { path: "crear-citas", component: CrearCitasComponent },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "editar-perfil", component: EditarPerfilComponent },
  { path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
  { path: "recuperar-contrasena", component: RecuperarContrasenaComponent },
  { path: "editar-medico", component: EditarMedicoComponent },
  { path: "editar-usuario", component: EditarUsuarioComponent },
  {
    path: "gestion-pqrs", component: GestionPqrsComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["paciente"]
    }
  },
  {
    path: "crear-pqrs", component: CrearPqrsComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["paciente"]
    }
  },
  {
    path: "detalle-pqrs/:codigo", component: DetallePqrsComponent, canActivate: [RolesGuard],
    data: { expectedRole: ["paciente", "admin"] }
  },
  {
    path: "atender-cita", component: GestionCitasComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["medico"]
    }
  },
  {
    path: "crear-medico", component: CrearMedicoComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["admin"]
    }
  },
  { path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }