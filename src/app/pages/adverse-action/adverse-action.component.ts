import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Candidate } from 'src/app/shared/model/candidate.model';
import { CandidateService } from 'src/app/shared/service/candidate.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import {  MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/organisms/dialog-box/dialog-box.component';
import { SUCCESS_MESSAGE, DIALOGBOX_HEADER, FROM, EMAIL_SUBJECT, EMAIL_CONTENT, DIALOGBOX_BUTTON, ADVERSEACTION_BUTTON, ADVERSEACTION_FOOTER, CHECKBOX_OPTIONS, CHECKBOX_HEADER } from 'src/app/shared/constants/constant-data';

@Component({
  selector: 'app-adverse-action',
  templateUrl: './adverse-action.component.html',
  styleUrls: ['./adverse-action.component.css']
})
export class AdverseActionComponent implements OnInit {
  id: number;
  candidateDetail: Candidate;
  isButtonDisable:boolean = true;
  checkboxOptions= CHECKBOX_OPTIONS;
  readonly SUCCESS_MESSAGE =SUCCESS_MESSAGE;
  readonly DIALOGBOX_HEADER =DIALOGBOX_HEADER;
  readonly FROM = FROM;
  readonly EMAIL_SUBJECT = EMAIL_SUBJECT;
  readonly EMAIL_CONTENT =EMAIL_CONTENT;
  readonly DIALOGBOX_BUTTON = DIALOGBOX_BUTTON;
  readonly ADVERSEACTION_FOOTER =ADVERSEACTION_FOOTER;
  readonly ADVERSEACTION_BUTTON = ADVERSEACTION_BUTTON;
  readonly CHECKBOX_HEADER = CHECKBOX_HEADER;
  private checkedOptions: string[] = [];
  constructor(private route : ActivatedRoute , private candidateService: CandidateService , private router: Router , private location: Location ,
    private _formBuilder: FormBuilder , public dialog: MatDialog ,
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) =>{
      this.id = +params['id'];
      this.candidateDetail = this.candidateService.getCandidateDetailsById(this.id);
    }, error => {
      console.log(error);
    })
  }
  checkboxes = this._formBuilder.group({
    "cb0": false,
    "cb1": false,
    "cb2": false,
  });

  backButton(){
    this.location.back();
  }

  onChecked(index: number) {
   const value = this.checkboxes.value;
   const allValues = Object.values(value);
   this.checkedOptions = [];
   if(allValues.includes(true)){
    this.isButtonDisable = false;
    allValues.forEach((val,index) =>{
      if(val){
        this.checkedOptions.push(this.checkboxOptions[index]);
      }
    })
   }
   else{
    this.isButtonDisable = true;
   }
  }

  onButtonClick(){
    const dialogRef = this.dialog.open(DialogBoxComponent ,
      {
        data:{
          id:this.id,
          checkedOptions: this.checkedOptions
        }
      });

    dialogRef.afterClosed().subscribe(result => {
    });

  }
}
