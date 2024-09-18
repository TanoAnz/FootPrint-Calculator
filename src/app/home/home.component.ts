import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
import { airport } from '../models/airport.model';
import { footprint } from '../models/footprint.model'; 
import { calcolo } from '../models/calcolo.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent {
  airports: airport[]= [];
  selectedValue!: string;
  selectedValue2!: string;
  passeggeri!: number;
  submit= false;
  footprintresponse!: footprint;
  calcolo={
    from:'',
    to:'',
    passeggeri:0,
    footprint: 0,
    footprintxPassegger: 0,
  }
  calcoli: calcolo[]= [];
  constructor(private data:DataService){}
  ngOnInit(): void {
    this.data.getDati("https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json").subscribe({
      next: (data) =>{
        console.log(data);
        this.airports=data;
      },
      error: (err)=>{
        console.error(err);
      }
    })
  }
  onSubmit(){
    this.data.calculateFlightFootprint(this.selectedValue, this.selectedValue2).subscribe({
      next: (response) =>{
        this.footprintresponse= response;
        console.log(this.footprintresponse)
        this.calcolo.from= this.selectedValue;
        this.calcolo.to=this.selectedValue2;
        this.calcolo.passeggeri=this.passeggeri;
        this.calcolo.footprint=this.footprintresponse.footprint;
        this.calcolo.footprintxPassegger= this.calcolo.footprint*this.passeggeri;
        this.calcoli.push(this.calcolo)
        console.log(this.calcoli)
        this.calcolo={
          from: '',
          to: '',
          passeggeri:0,
          footprint:0,
          footprintxPassegger:0,
        }
      },
      error : (err) => {
        console.error('errore calcolo', err)
      }
    })

  }
}
