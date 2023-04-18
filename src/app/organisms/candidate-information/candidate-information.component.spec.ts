import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInformationComponent } from './candidate-information.component';
import { By } from '@angular/platform-browser';

describe('CandidateInformationComponent', () => {
  let component: CandidateInformationComponent;
  let fixture: ComponentFixture<CandidateInformationComponent>;
  const DataInfo = {
    id: 1,
    name: 'John Smith',
    adjudication: '',
    status: 'Clear',
    location: 'Barrouallie' ,
    date: '2/22/2022',
    dateofbirth:'1990-09-10 (26)' ,
    email: 'John.smith@checkr.com' ,
    phone: '(555) 555-5555',
    zip: '94158',
    licence: 'FTEST1111 (CA)',
    createdAt: 'Nov 29,2016 11:05:57 AM' ,
    completedDate: 'Dec 4, 2016 12:00:00 PM' ,
    tat: '1 Day , 14 hours'
 };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateInformationComponent);
    component = fixture.componentInstance;
    component.data = DataInfo
    fixture.detectChanges();
  });

  it('should show candidate information ', () => {
    expect(component).toBeTruthy();
  });

  it('should have header in Candidate information component', () => {
    const board = fixture.debugElement.query(By.css('mat-panel-title')).nativeElement;
     expect(board.innerHTML.trim()).toEqual(component.CANDIDATE_INFORMATION);
  });
  it('should have image src in card in first row', () => {
    const board = fixture.debugElement.query(By.css('.card-container'));
    fixture.detectChanges();
    const src1 = board.childNodes[0].nativeNode;
    const src2 = board.childNodes[1].nativeNode;
    const src3 = board.childNodes[2].nativeNode;
     expect(src1).toBeDefined();
     expect(src2).toBeDefined();
     expect(src3).toBeDefined();

  });
  it('should have image src in card in last row', () => {
    const board = fixture.debugElement.query(By.css('.last-container'));
    fixture.detectChanges();
    const src1 = board.childNodes[0].nativeNode;
    const src2 = board.childNodes[1].nativeNode;
     expect(src1).toBeDefined();
     expect(src2).toBeDefined();
  });

});
