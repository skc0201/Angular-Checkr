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
  it('should have export image src in header', () => {
    const ele = fixture.debugElement.query(By.css('.header-right'));
    fixture.detectChanges();
    const src = ele.childNodes[0].nativeNode['src'];
    expect(src).toContain('http://localhost:9877/assets/icons/export.svg');
  });
  it('should have manual order image src in header', () => {
    const ele = fixture.debugElement.query(By.css('.header-right'));
    fixture.detectChanges();
    const src = ele.childNodes[1].nativeNode['src'];
    expect(src).toContain('http://localhost:9877/assets/icons/manualorder.svg');
  });
});
