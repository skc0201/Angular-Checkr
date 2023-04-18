import { Component, Input, OnInit } from '@angular/core';
import { REPORTINFORMATION_HEADER } from 'src/app/shared/constants/constant-data';
import { Candidate } from 'src/app/shared/model/candidate.model';

@Component({
  selector: 'app-report-information',
  templateUrl: './report-information.component.html',
  styleUrls: ['./report-information.component.css']
})
export class ReportInformationComponent {
  panelOpenState = false;
  readonly REPORTINFORMATION_HEADER = REPORTINFORMATION_HEADER;
  @Input() data: Candidate;


}
