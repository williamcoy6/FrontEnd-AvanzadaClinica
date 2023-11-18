import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { Alerta } from '../alerta/alerta.component';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.component.html',
  styleUrls: ['./crear-medico.component.css']
})
export class CrearMedicoComponent {
  alerta!: Alerta;
  ciudades: string[];


  constructor(private imagenService: ImagenService, private authService: AuthService, private clinicaService: ClinicaService) {
   this.ciudades = [];

}
}
