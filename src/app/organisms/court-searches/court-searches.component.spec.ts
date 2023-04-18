import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtSearchesComponent } from './court-searches.component';
import { By } from '@angular/platform-browser';

describe('CourtSearchesComponent', () => {
  let component: CourtSearchesComponent;
  let fixture: ComponentFixture<CourtSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtSearchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render court search component in Candidate details page', () => {
    expect(component).toBeTruthy();
  });
  it('should have header in Court Searches component', () => {
    const board = fixture.debugElement.query(By.css('.header-title')).nativeElement;
     expect(board.innerHTML.trim()).toEqual(component.COURT_SEARCHES);
  });
});
