import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  public url:string;
  constructor(private http: HttpClient) {

    this.url='assets/json/articulos.json';
   }

   getArticulos(){


    return this.http.get(this.url);
   }
}
