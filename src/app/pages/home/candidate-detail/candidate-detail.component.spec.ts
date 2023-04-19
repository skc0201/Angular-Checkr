import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateDetailComponent } from './candidate-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from 'src/app/shared/service/candidate.service';
import { By } from '@angular/platform-browser';
import { AdverseActionComponent } from '../../adverse-action/adverse-action.component';

describe('CandidateDetailComponent', () => {
  let component: CandidateDetailComponent;
  let fixture: ComponentFixture<CandidateDetailComponent>;
  let mockToolBarService;
  const locationStub = {
    back: jasmine.createSpy('back')
};
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
      imports:[RouterTestingModule.withRoutes([
        { path: 'adverse', component: AdverseActionComponent}
    ]) , HttpClientModule],
      declarations: [ CandidateDetailComponent ],
      providers:[{ provide: CandidateService, useValue: mockToolBarService },
        {provide: Location, useValue: locationStub}
      ]
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
    expect(src).toBeDefined();
  });
  it('should have manual order image src in header', () => {
    const ele = fixture.debugElement.query(By.css('.header-right'));
    fixture.detectChanges();
    const src = ele.childNodes[1].nativeNode['src'];
    expect(src).toBeDefined();
  });
  it('should call ngOnInit', () => {
    component.id = 1;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.candidateDetail).toEqual(DataInfo);
  });
  it('should call OnAdverseAction func', () => {
    const routerSpy = {
      navigate: jasmine.createSpy('navigate')
    };
    component.OnAdverseAction();
    expect(routerSpy.navigate).toBeDefined();
  });
  it('should  call on backButton func', () => {
    component.backButton();
    fixture.detectChanges();
    const location = fixture.debugElement.injector.get(Location);
    expect(location.pathname).not.toBeDefined();
  });
});
