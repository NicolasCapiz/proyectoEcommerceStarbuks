import { Component, OnInit } from '@angular/core';
import { Bebida } from 'src/app/models/bebida.model';
import * as Cafes from '../../../../assets/data/bebidasCafes.json';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  bebidasHeladas: Bebida[] = [];
  constructor() {
    this.bebidasHeladas = Cafes.bebidasHeladas;
  }

  ngOnInit(): void {}
}
