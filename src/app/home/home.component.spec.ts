import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './home.component';
import { DataService } from '../services/data.service';
import { airport } from '../models/airport.model';
import { footprint } from '../models/footprint.model';
import { CalcoloComponent } from '../calcolo/calcolo.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, CalcoloComponent ],
      imports: [ HttpClientTestingModule, FormsModule, NgSelectModule ],
      providers: [ DataService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should load airports on init', () => {
    const mockAirports: airport[] = [
      {
        code: 'JFK',
        lat: '40.6413',
        lon: '-73.7781',
        name: 'John F. Kennedy International Airport',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        woeid: '23675177',
        tz: 'America/New_York',
        phone: '718-244-4444',
        type: 'airport',
        email: 'info@jfkairport.com',
        url: 'https://www.jfkairport.com',
        runway_length: '4000',
        elev: '13',
        icao: 'KJFK',
        direct_flights: '100',
        carriers: '40'
      },
      {
        code: 'LAX',
        lat: '33.9416',
        lon: '-118.4085',
        name: 'Los Angeles International Airport',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        woeid: '24367021',
        tz: 'America/Los_Angeles',
        phone: '310-646-5252',
        type: 'airport',
        email: 'info@flylax.com',
        url: 'https://www.flylax.com',
        runway_length: '3700',
        elev: '125',
        icao: 'KLAX',
        direct_flights: '150',
        carriers: '60'
      }
    ];
    const req = httpTestingController.expectOne('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json');
    req.flush(mockAirports); 
    fixture.detectChanges();
    expect(component.airports).toEqual(mockAirports);
  });
});

