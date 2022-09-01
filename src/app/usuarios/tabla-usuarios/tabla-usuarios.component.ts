import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  listaUsuarios:any = []
  cabeceras = ["Nombre", "Fecha Nacimiento", "Edad", "Dirección"];


  constructor(private http:HttpClient) {
    
   }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/users').subscribe(response => {
      this.listaUsuarios = response

    }
    )
  }

}
