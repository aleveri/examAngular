import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';
import { AppConfiguracion } from '../app.configuracion';
import { Hotel } from '../Modelos/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient,
    private appConfiguracion: AppConfiguracion) { }

  listar(params: any[]) {
    return this.http.get(`${AppConfiguracion.API_URL}:9000/list`, {
      params: new HttpParams().append('pagina', params[0]).append('cantidadPagina', params[1]),
    });
  }

  filtrar(params: any[]) {
    return this.http.get(`${AppConfiguracion.API_URL}:9000/filter`, {
      params: new HttpParams().append('calificacionMin', params[0]).append('calificacionMax', params[1]).append('name', params[2])
    });
  }
}
