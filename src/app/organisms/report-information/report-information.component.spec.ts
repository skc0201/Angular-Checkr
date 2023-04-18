import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInformationComponent } from './report-information.component';
import { By } from '@angular/platform-browser';

describe('ReportInformationComponent', () => {
  let component: ReportInformationComponent;
  let fixture: ComponentFixture<ReportInformationComponent>;
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
      declarations: [ ReportInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInformationComponent);
    component = fixture.componentInstance;
    component.data = DataInfo;
    fixture.detectChanges();
  });

  it('should render report information of a candidate', () => {
    expect(component).toBeTruthy();
  });
  it('should have candidate Report Information ', () => {
    expect(component.data.status).toEqual(DataInfo.status);
    expect(component.data.tat).toEqual(DataInfo.tat);
    expect(component.data.createdAt).toEqual(DataInfo.createdAt);
    expect(component.data.completedDate).toEqual(DataInfo.completedDate);
  });
  it('should have image src in card in last row', () => {
    const board = fixture.debugElement.query(By.css('.card-container'));
    fixture.detectChanges();
    const src1 = board.childNodes[0].nativeNode;
    const src2 = board.childNodes[1].nativeNode;
     expect(src1).toBeDefined();
     expect(src2).toBeDefined();
  });
});
