import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { By } from '@angular/platform-browser';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show loader', () => {
    expect(component).toBeTruthy();
  });
  it('should show data loader', () => {
    component.isSuccess = 'false';
    expect(component).toBeDefined();
  });
  it('should show success loader', () => {
    component.isSuccess = 'true';
    expect(component).toBeDefined();
  });
  it('should have image src in loader', () => {
    component.isSuccess = 'true';
    fixture.detectChanges();
    const board = fixture.debugElement.query(By.css('.success-loader')).nativeElement;
     expect(board).toBeDefined();
  });
});
