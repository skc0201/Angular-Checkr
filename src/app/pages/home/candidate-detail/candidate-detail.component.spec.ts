import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailComponent } from './candidate-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from 'src/app/shared/service/candidate.service';
import { By } from '@angular/platform-browser';

describe('CandidateDetailComponent', () => {
  let component: CandidateDetailComponent;
  let fixture: ComponentFixture<CandidateDetailComponent>;
  let mockToolBarService;

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
    mockToolBarService = jasmine.createSpyObj(['getCandidateDetailsById']);
    mockToolBarService.getCandidateDetailsById.and.returnValue(DataInfo);
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule , HttpClientModule],
      declarations: [ CandidateDetailComponent ],
      providers:[{ provide: CandidateService, useValue: mockToolBarService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render cnadidate details page', () => {
    expect(component).toBeTruthy();
  });
  it('should have candidate Information', () => {
    expect(component.candidateDetail.name).toEqual(DataInfo.name);
    expect(component.candidateDetail.email).toEqual(DataInfo.email);
    expect(component.candidateDetail.dateofbirth).toEqual(DataInfo.dateofbirth);

  });
  it('should have candidate Report Information in candidate detail page', () => {
    expect(component.candidateDetail.status).toEqual(DataInfo.status);
    expect(component.candidateDetail.tat).toEqual(DataInfo.tat);
  });
  it('should have export image src in header', () => {
    const ele = fixture.debugElement.query(By.css('.header-right'));
    fixture.detectChanges();
    const src = ele.childNodes[0].nativeNode['src'];
    expect(src).toContain('http://localhost:9877/assets/icons/preadverse.svg');
  });
  it('should have manual order image src in header', () => {
    const ele = fixture.debugElement.query(By.css('.header-right'));
    fixture.detectChanges();
    const src = ele.childNodes[1].nativeNode['src'];
    expect(src).toContain('http://localhost:9877/assets/icons/engage.svg');
  });
});
