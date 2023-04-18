import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show card in candidate details page', () => {
    expect(component).toBeTruthy();
  });
  it('should have first header in card', () => {
    component.header1 = "header-1";
    fixture.detectChanges();
    expect(component.header1).toEqual('header-1');
  });
  it('should have second header in card', () => {
    component.header2 = "header-2";
    fixture.detectChanges();
    expect(component.header2).toEqual('header-2');
  });

  it('should have image src in card', () => {
    component.imgSrc="Assets/icons/candidate.svg"
    fixture.detectChanges();
    const ele = fixture.debugElement.query(By.css('.imgage')).nativeElement;;
    expect(ele['src']).toContain('Assets/icons/candidate.svg');
  });

});
