import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';
import { imagenDTO } from '../modelo/ImagenDTO';
@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private imgURL = "http://localhost:8081/api/imagenes";
  constructor(private http: HttpClient) { }
  public subir(imagen: FormData): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.imgURL}/subir`, imagen);
  }
  public eliminar(imagenDTO: imagenDTO): Observable<MensajeDTO> {
    return this.http.request<MensajeDTO>('delete', `${this.imgURL}/eliminar`, { body: imagenDTO });
  }
}