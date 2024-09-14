import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey= 'ad18d32fe53134ebbc2ef63d';
  constructor(private http: HttpClient) { }
  getDati(url: string): Observable<any>{
    return this.http.get(url);
  }
  calculateFlightFootprint(from:string, to:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(this.apiKey + ':')}`
    });
    let params = new HttpParams()
      .set('segments[0][origin]', from)
      .set('segments[0][destination]', to)
      .set('segments[1][origin]', to)
      .set('segments[1][destination]', from)
      .set('cabin_class', 'economy')
      .set('currencies[]', 'EUR')
      .set('currencies[]', 'USD');

    return this.http.get('https://api.goclimate.com/v1/flight_footprint', { headers, params });
  }
}

