// editar-usuario.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'] // Puedes cambiar o eliminar esto según tus necesidades
})
export class EditarUsuarioComponent {

  archivos: any; // Debes definir el tipo correcto para esta propiedad

  onFileChange(event: any) {
    // Implementa la lógica para manejar el cambio de archivo
  }

  subirImagen() {
    // Implementa la lógica para subir la imagen
  }

  borrarUsuario() {
    // Implementa la lógica para borrar el usuario
  }
}
