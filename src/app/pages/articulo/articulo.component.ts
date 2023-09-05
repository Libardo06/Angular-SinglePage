import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';
import {NgForm} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit{

  //VARIALES PUBLICAS O GLOBALES

  public articuloJson:any;
  public renderArticulo:any;
  public contenidoArticulo:any;
  public login:boolean = false;
  public usuario:string ="";
  public password:string = "";
  public usuariosJson:any;
  public renderUsuario:any;
  public message_error_login:boolean = false;

  constructor(activateroute: ActivatedRoute, private articulosService: ArticulosService, private usuariosService:UsuariosService){

    this.articulosService.getArticulos()
    .subscribe(respuesta=>{

      this.articuloJson=respuesta;
      
      this.renderArticulo = this.articuloJson.find((result:any)=>{


          return result.url == activateroute.snapshot.params["id"];
        })
        this.contenidoArticulo = this.renderArticulo.contenido;
    })
    
   
  }
  
  ngOnInit(): void {
  
  }

  onSubmit(f:NgForm){
    this.usuariosService.getUsuarios().subscribe(respuesta=>{
      
        this.usuariosJson = respuesta;
        this.renderUsuario = this.usuariosJson.find((result:any)=>{
          if(result.usuario == this.usuario && result.password == this.password){
              return true;
          }else{
            return false;
          }
        })
        if(this.renderUsuario){
          this.login = true;
        }else{
          this.message_error_login = true;
        }
    })

  }
}
