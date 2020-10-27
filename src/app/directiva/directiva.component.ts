import { Component, OnInit } from '@angular/core';

interface Producto {
  nombre: string,
  stock: number,
  fabricante: string,
  fechaVencimiento: Date,
  importante: boolean, 
  textoGrande: boolean
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  cargando: boolean = true;
  loading: string = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b6e0b072897469.5bf6e79950d23.gif";
  nombres: Array<string> = ["jose", "melanie", "andres", "luisa", "ana"];
  productos: Array<Producto> = [
    { nombre: "Arroz", stock: 10, fabricante: "Diana", fechaVencimiento: new Date('04/15/2020'), importante: true, textoGrande: false },
    { nombre: "Aceita", stock: 10, fabricante: "Oliva", fechaVencimiento: new Date('05/20/2020'), importante: false, textoGrande: true },
    { nombre: "Panela", stock: 90, fabricante: "Panela", fechaVencimiento: new Date('06/05/2020'), importante: true, textoGrande: false },
    { nombre: "Tomate", stock: 50, fabricante: "Campo", fechaVencimiento: new Date('07/25/2020'), importante: false, textoGrande: true }];
  pestania: string = "";
  mostrarCuadrado: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 4000)
  }

  mostrarCargando() {
    this.cargando = !this.cargando;
  }

  cambiarPestania(pestaña: string) {
    this.pestania = pestaña;
  }

  alternarFondoCuadrado() {
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }
}
