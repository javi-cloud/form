import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  nombres: string = '';
  email: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';

  calcularEdad(){
    const fechaNacimiento = new Date(this.fechaNacimiento);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    console.log('Nombres:', this.nombres);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
    console.log('Edad:', edad);
  }

  constructor() { }

  ngOnInit() {}

}
