import { Component, Input, OnInit } from '@angular/core';
import { calcolo } from '../models/calcolo.model';

@Component({
  selector: 'app-calcolo',
  templateUrl: './calcolo.component.html',
  styleUrl: './calcolo.component.css'
})
export class CalcoloComponent{
@Input() calcolo!: calcolo;
constructor(){}
}
