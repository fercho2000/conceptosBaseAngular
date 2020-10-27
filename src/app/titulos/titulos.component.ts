import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  nombre: string = 'Jose';
  imagen: string = 'https://imotorhead.com/mh/wp-content/themes/imotorhead/images/homepage-header.jpg';
  inputNuevo: string = 'Hola soy input';
  correo: string = '';
  contrasena: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  ingresar() {
    console.log("Este es el correo: ", this.correo);
    console.log("Esta es la password: ", this.contrasena);
  }

  llamarAlert() {
    alert("Has hecho doble clic")
  }

  escribirModelo() {
    console.log("ejecutando la pass ", this)
  }

  escribir(evento) {
    console.log("evento input: ", evento.target.value);
  }
  colorearFondo(evento) {
    evento.srcElement.style.background = "red";
    evento.srcElement.style.width = "500 px";
    console.log("el valor del evento..", evento);
  }

  lanzarEventoKeyDwon(evento){
    console.log("evento que llega del kwyDown....", evento);
    if (evento.key === "Enter") {
      alert("Hiciste un enter")
    }
  }

  cambiarTamanioImg(evento){
    console.log("ejecutando evento mouseenter", evento);
    evento.srcElement.style.border = "10px solid red";
   
  }

  reestablecerValoresImg(evento){
    console.log("ejecutando evento mouseleave", evento);
    evento.srcElement.style.border = "10px solid blue";
  }

}
