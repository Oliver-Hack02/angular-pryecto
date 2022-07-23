import { Component, OnInit  } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Persona {
  value: string;
  viewValue: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {
  foods: Food[] = [
    {value: 'ceviche-0', viewValue: 'Ceviche'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'pollo-2', viewValue: 'Pollo a la brasa'},
    {value: 'papa-3', viewValue: 'Papa a la huancaina'},
    {value: 'aji-4', viewValue: 'Aji de gallina'},
    {value: 'cau-5', viewValue: 'Cau Cau'},
    {value: 'lomo-6', viewValue: 'Lomo Saltado'}
  ];

  personas: Persona[] = [
    {value: 'pareja-0', viewValue: 'Invitado'},
    {value: 'pareja-1', viewValue: 'Pareja'},
    {value: 'familiar-2', viewValue: 'Familiar'},
    {value: 'amistad-3', viewValue: 'Amigos'},
    {value: 'cumple-4', viewValue: 'Cumpleañero'}
  ];


  constructor() {}

  ngOnInit(): void {
  }
}
