import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { citaPacienteDTO } from 'src/app/modelo/citaPacienteDTO';
import { CitaServiceService } from 'src/app/servicios/cita-service.service';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent {
  citaPacienteDTO: citaPacienteDTO;
  
  constructor() {
    this.citaPacienteDTO = new citaPacienteDTO();
  }

  public crearCita() {

  }

  public cancelarCita() {

  }
  public citaAgendada() {
    alert('Cita agendada');

  }
}