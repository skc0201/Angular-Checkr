import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverseActionComponent } from './adverse-action.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { CandidateService } from 'src/app/shared/service/candidate.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { By } from '@angular/platform-browser';

describe('AdverseActionComponent', () => {
  let component: AdverseActionComponent;
  let fixture: ComponentFixture<AdverseActionComponent>;
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
      imports: [
        RouterTestingModule ,
        HttpClientModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatDividerModule,
        MatCheckboxModule
      ],
      declarations: [ AdverseActionComponent ],
      providers:[{ provide: CandidateService, useValue: mockToolBarService }]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverseActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render adverse action page', () => {
    expect(component).toBeTruthy();
  });
  it('should have header in adverse action page', () => {
    const board = fixture.debugElement.query(By.css('.header-text')).nativeElement;
     expect(board.innerHTML).toEqual(component.DIALOGBOX_HEADER);
  });
  it('should render email and subject in adverse action page', () => {
    const board = fixture.debugElement.query(By.css('.email-content-1'));
    fixture.detectChanges();
    expect(board.childNodes[0].nativeNode.textContent.trim()).toEqual('Dear '+DataInfo.name+',');
  });
  it('should have Header for checkboxes', () => {
    const board = fixture.debugElement.query(By.css('.checkbox-header')).nativeElement;
     expect(board.innerHTML).toEqual(component.CHECKBOX_HEADER);
  });
  it('should have footer text', () => {
    const board = fixture.debugElement.query(By.css('.footer-text'));
    fixture.detectChanges();
    expect(board.childNodes[0].nativeNode.textContent).toEqual(component.ADVERSEACTION_FOOTER);
  });
});
