import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcoloComponent } from './calcolo.component';
import { calcolo } from '../models/calcolo.model';
import { By } from '@angular/platform-browser';

describe('CalcoloComponent', () => {
  let component: CalcoloComponent;
  let fixture: ComponentFixture<CalcoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcoloComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcoloComponent);
    component = fixture.componentInstance;
  });

  it('should display calcolo details correctly', () => {
    const mockCalcolo: calcolo = {
      from: 'JFK',
      to: 'LAX',
      passeggeri: 2,
      footprint: 2800,
      footprintxPassegger: 5600
    };

    component.calcolo = mockCalcolo;
    fixture.detectChanges();
    const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(titleEl.textContent).toContain('Calcolo per JFK-LAX');
    const footprintEl = fixture.debugElement.queryAll(By.css('.text'))[0].nativeElement;
    expect(footprintEl.textContent).toContain('2800 kg di Co2 per passeggero');

    const footprintxPasseggerEl = fixture.debugElement.queryAll(By.css('.text'))[1].nativeElement;
    expect(footprintxPasseggerEl.textContent).toContain('5600 kg di Co2 per 2 passeggeri');
  });


});

