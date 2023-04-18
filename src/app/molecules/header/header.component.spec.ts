import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render header', () => {
    expect(component).toBeTruthy();
  });
  it('should have header in Header component', () => {
    const board = fixture.debugElement.query(By.css('.header-text')).nativeElement;
     expect(board.innerHTML.trim()).toEqual(component.HEADER);
  });
});
