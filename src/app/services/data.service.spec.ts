import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifica che non ci siano richieste HTTP pendenti
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform a GET request via getDati method', () => {
    const mockResponse = { success: true };
    const testUrl = 'https://example.com/data';

    service.getDati(testUrl).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); // Simula la risposta del server
  });

  it('should calculate flight footprint correctly via calculateFlightFootprint method', () => {
    const mockResponse = { footprint: 2800 };
    const from = 'JFK';
    const to = 'LAX';

    service.calculateFlightFootprint(from, to).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(service.apiKey + ':')}`
    });

    const params = new HttpParams()
      .set('segments[0][origin]', from)
      .set('segments[0][destination]', to)
      .set('segments[1][origin]', to)
      .set('segments[1][destination]', from)
      .set('cabin_class', 'economy')
      .set('currencies[]', 'EUR')
      .set('currencies[]', 'USD');

    const req = httpTestingController.expectOne((request) =>
      request.url === 'https://api.goclimate.com/v1/flight_footprint' &&
      request.method === 'GET' &&
      request.params.get('segments[0][origin]') === 'JFK' &&
      request.params.get('segments[0][destination]') === 'LAX' &&
      request.params.get('segments[1][origin]') === 'LAX' &&
      request.params.get('segments[1][destination]') === 'JFK' &&
      request.params.get('cabin_class') === 'economy' &&
      (request.params.getAll('currencies[]')?.includes('USD') ?? false)
    );

    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); // Simula la risposta del server
  });
});
