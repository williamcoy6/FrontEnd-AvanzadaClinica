
import { Component } from '@angular/core';
import { Alerta } from '../alerta/alerta.component';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  alerta!: Alerta;

  constructor(private TokenService: TokenService, private authService: AuthService) {

  }
  public login() {
    this.authService.login(this.loginDTO).subscribe({
      next: data => {
        this.TokenService.login(data.respuesta.token);

      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }

}


