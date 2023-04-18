import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render status of candidates', () => {
    expect(component).toBeTruthy();
  });
  it('should have text', () => {
    component.text = 'Chip'
    expect(component.text).toEqual('Chip');
  });
  it('should have type', () => {
    component.type = 'success'
    expect(component.type).toEqual('success');
  });
});
