import { Component } from '@angular/core';
import { recuperarContrasenaDTO } from 'src/app/modelo/recuperarContrasenaDTO';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {

  recuperarContrasenaDTO: recuperarContrasenaDTO;

  constructor() {
    this.recuperarContrasenaDTO = new recuperarContrasenaDTO;
  }

  recuperar() {
    console.log(this.recuperarContrasenaDTO)
  }

}
