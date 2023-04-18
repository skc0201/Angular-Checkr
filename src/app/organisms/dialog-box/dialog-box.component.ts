import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ATTACHMENT_TEXT, DIALOGBOX_BUTTON, DIALOGBOX_HEADER, EMAIL_CONTENT, EMAIL_SUBJECT, FROM, SUCCESS_MESSAGE, WARNING_TEXT } from 'src/app/shared/constants/constant-data';
import { Candidate } from 'src/app/shared/model/candidate.model';
import { CandidateService } from 'src/app/shared/service/candidate.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  CHECKBOX_HEADER(CHECKBOX_HEADER: any) {
    throw new Error('Method not implemented.');
  }
  ADVERSEACTION_FOOTER(ADVERSEACTION_FOOTER: any) {
    throw new Error('Method not implemented.');
  }
  candidateDetail: Candidate;
  warningText:string[] = WARNING_TEXT;
  attachmenttext:string[] = ATTACHMENT_TEXT;
  isLoading: boolean = false;
  readonly SUCCESS_MESSAGE =SUCCESS_MESSAGE;
  readonly DIALOGBOX_HEADER =DIALOGBOX_HEADER;
  readonly FROM = FROM;
  readonly EMAIL_SUBJECT = EMAIL_SUBJECT;
  readonly EMAIL_CONTENT =EMAIL_CONTENT;
  readonly DIALOGBOX_BUTTON = DIALOGBOX_BUTTON;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number , checkedOptions: string[]} , private candidateService: CandidateService , private dialogRef: MatDialogRef<DialogBoxComponent> , private router: Router) { }

  ngOnInit(): void {
    this.candidateDetail = this.candidateService.getCandidateDetailsById(this.data.id);
  }


  onButtonClick(){
    this.isLoading = true;
    const updated:Candidate = this.candidateDetail;
    updated.adjudication = "adverse action";
    updated.status = "consider";

    this.candidateService.updateCandidateDetail(this.data.id ,updated).subscribe(() => {
      setTimeout(()=>{
        this.dialogRef.close();
        this.isLoading = false;
        this.router.navigate(['/candidatelist']);
      },2800)

    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }
  closeModal(){
    this.dialogRef.close();
  }
}
