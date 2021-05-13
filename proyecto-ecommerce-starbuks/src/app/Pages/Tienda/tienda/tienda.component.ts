import { Component, OnInit } from '@angular/core'
// import { Bebidas } from 'src/app/Bebidas'
import * as cafes from '../../../../assets/data/bebidasCafes.json'
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  constructor() {
    console.log(cafes.bebidasHeladas.producto1)
  }

  ngOnInit(): void {}
}
