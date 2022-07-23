import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-tservices',
  templateUrl: './tservices.component.html',
  styleUrls: ['./tservices.component.css']
})
export class TservicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
