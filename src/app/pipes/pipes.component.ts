import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  titulo: string = "Hola soy un titulo";
  dinero: number = 2400;
  ganancias: number = 0.54;
  fechaDeNacimiento: Date = new Date('01-23-2000');
  textoLargo: string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex modi repellendus facere fugit quas dignissimos molestiae quidem. Labore iste eaque nulla corrupti libero molestiae omnis, deleniti optio consequuntur laboriosam!";
  constructor() { }

  ngOnInit(): void {
  }

}
