import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Candidate } from "../model/candidate.model";
import { Subject } from "rxjs";
import { environment } from '../../../environments/environment';


@Injectable({providedIn:'root'})
export class CandidateService{
  updatedCandidates = new Subject<Candidate[]>();
  constructor(private http: HttpClient) {}
  private candidates:Candidate[] = [];

  // updateCandidateList(){
  //   return this.http.put('https://checkr-app-default-rtdb.firebaseio.com/candidates.json',this.list)
  // }

  getAllCandidates(){
    return this.http.get(environment.api).subscribe((candidate: Candidate[]) => {
      this.candidates = candidate;
      this.updatedCandidates.next(candidate)
    })
  }

  getCandidateDetailsById(id: number){
    const detail = this.candidates[id-1];
    return detail;
  }

  updateCandidateDetail(id: number,candidate: Candidate){
     return this.http.put(environment.api,this.candidates)
  }

}
