import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Pepon';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = [ 'Maria', 'Pepito', 'Joselito' ];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarGenero(){
    if(this.genero=='femenino'){
      this.genero = 'masculino';
    }else{
      this.genero = 'femenino';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }


  persona = {
    nombre: 'Pepe',
    edad: 35,
    direccion: 'Ottawa,Canada'
  }

}
