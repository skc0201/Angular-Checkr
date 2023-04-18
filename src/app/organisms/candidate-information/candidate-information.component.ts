import { Component, Input, OnInit } from '@angular/core';
import { CANDIDATE_INFORMATION } from 'src/app/shared/constants/constant-data';
import { Candidate } from 'src/app/shared/model/candidate.model';

@Component({
  selector: 'app-candidate-information',
  templateUrl: './candidate-information.component.html',
  styleUrls: ['./candidate-information.component.css']
})
export class CandidateInformationComponent implements OnInit {
  panelOpenState = false;
  @Input() data: Candidate;
readonly CANDIDATE_INFORMATION =CANDIDATE_INFORMATION;
  constructor() {

   }

  ngOnInit(): void {
  }

}
