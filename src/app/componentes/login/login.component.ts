import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@Input() usuario : string;
  //@Input() clave : string;
  public usuario = "juan";
  public clave = "123";
  public usuarioAux :string;
  public claveAux :string;
  public flag = "";

  constructor() {
  }

  ngOnInit(): void {
  }


  Login()
  {
    if(this.usuario == this.usuarioAux && this.clave == this.claveAux)
    {
      window.alert("Se pudo conectar");
      this.flag = "algo";
    }
  }
}
