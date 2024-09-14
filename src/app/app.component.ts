import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private data: DataService){}
  ngOnInit(): void {
    this.data.getDati("https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json").subscribe({
      next: (data) =>{
        console.log(data);
      },
      error: (err)=>{
        console.error(err);
      }
    })
  }


}
