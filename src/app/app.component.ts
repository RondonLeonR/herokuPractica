import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primer-Ejemplo';

  HacerCambios()
  {
    this.title = "angular 2021, bienvenidos";
  }

  Calcular(uno, dos)
  {
    return (uno + dos)/2;
  }
}
