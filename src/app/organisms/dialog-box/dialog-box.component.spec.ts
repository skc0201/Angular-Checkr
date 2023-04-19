import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxComponent } from './dialog-box.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from 'src/app/shared/service/candidate.service';
import { By } from '@angular/platform-browser';

describe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;
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
        MatFormFieldModule,
        MatDialogModule,
        HttpClientModule
      ],
      declarations: [ DialogBoxComponent  ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {
          id:1 ,
          checkedOptions:['checked-1' ,'checked-2']
        } },
        { provide: MatDialogRef, useValue: {} },
        { provide: CandidateService, useValue: mockToolBarService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    component.candidateDetail = DataInfo;
    component.data  ={
      id:1 ,
      checkedOptions:['checked-1' ,'checked-2']
    }
    fixture.detectChanges();
  });

  it('should show dialog box', () => {
    expect(component).toBeTruthy();
  });
  it('should have header in dialog box', () => {
    const board = fixture.debugElement.query(By.css('.header-text')).nativeElement;
     expect(board.innerHTML).toEqual(component.DIALOGBOX_HEADER);
  });
  it('should render email and subject in dialog box', () => {
    const board = fixture.debugElement.query(By.css('.email-content-1'));
    fixture.detectChanges();
    expect(board.childNodes[0].nativeNode.textContent.trim()).toEqual('Dear '+DataInfo.name+',');
  });
  it('should have Attachement header', () => {
    const board = fixture.debugElement.query(By.css('.checkbox-header')).nativeElement;
     expect(board.innerHTML).toEqual(component.EMAIL_CONTENT[7]);
  });
  it('should have Button text', () => {
    const board = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(board.innerHTML).toEqual(component.DIALOGBOX_BUTTON);
  });
  it('should  Button clickable', () => {
    const board = fixture.debugElement.query(By.css('button')).nativeElement;
    board.click();
  });
  it('should call onInit', () => {
    component.data.id =1;
    component.ngOnInit();
    fixture.detectChanges();
expect(component.candidateDetail).toEqual(DataInfo);
  });
});
