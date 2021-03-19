import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primer-Ejemplo';

  public edadUno : number;
  public edadDos : number;
  public promedio : number;
  public total : number;
  
  public constructor()
  {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.total = 0;
  }

  SumarEdades()
  {
    this.total = this.edadUno + this.edadDos;
  }

  Calcular()
  {
    this.promedio = (this.edadUno + this.edadDos)/2;
  }

  Limpiar()
  {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.total = 0;
  }

}

export class Usuario{
  public nombre : string;
  public clave : string;
}
