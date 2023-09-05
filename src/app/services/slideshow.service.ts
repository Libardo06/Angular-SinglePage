// importamos el decorador Injectable para inyectar clases de dependencias en los componentes
import { Injectable } from '@angular/core';

// este modulo es para conectarnos a cualquier API con peticiones HTTP
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  public url:string;

  constructor(private http: HttpClient) {

      this.url = "assets/json/slideshow.json";

   }

   getSlideshow(){



    return this.http.get(this.url);
   }
}
