import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Candidate } from 'src/app/shared/model/candidate.model';
import { CandidateService } from 'src/app/shared/service/candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  id: number;
  candidateDetail: Candidate;
  isLoading: boolean = false;

  constructor( private route : ActivatedRoute , private candidateService: CandidateService ,private location: Location , private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) =>{
      this.isLoading = true;
      this.id = +params['id'];
      this.candidateDetail = this.candidateService.getCandidateDetailsById(this.id);
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
    })
    this.candidateDetail = this.candidateService.getCandidateDetailsById(this.id);
  }
  backButton(){
    this.location.back();
  }
  OnEngage(){
    this.isLoading = true;
    const updated:Candidate = this.candidateDetail;
    updated.adjudication = "engage";
    updated.status = "Clear";
    this.candidateService.updateCandidateDetail(this.id ,updated).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/candidatelist']);
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }
  OnAdverseAction(){
    this.router.navigate(['/adverse'] ,{queryParams: {id: this.id}})
  }

}
