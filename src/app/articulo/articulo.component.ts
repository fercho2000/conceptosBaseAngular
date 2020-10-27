import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/Articulo';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.articulos.push(
      { nombre: 'Televisor', descripcion: 'Marca dell 24 pulgadas', precio: 1000000, stock: 10, precioMayorista: 1200000 },
      { nombre: 'Laptop I5', descripcion: 'Marca lenovo', precio: 1500000, stock: 14, precioMayorista: 1700000 },
      { nombre: 'Monitor', descripcion: 'Curvo pantalla ful hd', precio: 2000000, stock: 60, precioMayorista: 3000000 }
    );
  }

  pasarParametroArticulos(articuloRecibido: Articulo) {
    this.ruta.navigate(['articuloDetalle', { articulo: JSON.stringify(articuloRecibido) }]);
  }

}
