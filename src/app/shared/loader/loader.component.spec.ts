import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

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
});
