import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { airport } from '../models/airport.model';
import { footprint } from '../models/footprint.model'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  airports: airport[]= [];
  form= {
  selectedValue: '',
  selectedValue2: '',
  passeggeri: 0,
};
  submit= false;
  footprintresponse!: footprint;
  footprint!:number;
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
    this.data.calculateFlightFootprint(this.form.selectedValue, this.form.selectedValue2).subscribe({
      next: (response) =>{
        this.footprintresponse= response;
        console.log(this.footprintresponse)
      },
      error : (err) => {
        console.error('errore calcolo', err)
      }
    })
    this.footprint= this.footprintresponse.footprint*this.form.passeggeri
    this.submit=true;
  }
}
