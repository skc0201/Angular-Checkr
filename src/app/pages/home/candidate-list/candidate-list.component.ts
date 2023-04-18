import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CandidateService } from 'src/app/shared/service/candidate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/shared/model/candidate.model';
import { FormBuilder } from '@angular/forms';
import { CANDIDATELIST_HEADER, CANDIDATELIST_SEARCH, FILTER, ADJUDICATION, STATUS, FILTER_OPTIONS, CANDIDATELIST_COLUMNS } from 'src/app/shared/constants/constant-data';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'adjudication', 'status' , 'location' , 'date'];
  dataSource;
  isLoading: boolean = false;
  readonly CANDIDATELIST_HEADER =CANDIDATELIST_HEADER;
  readonly CANDIDATELIST_SEARCH =CANDIDATELIST_SEARCH;
  readonly FILTER =FILTER;
  readonly ADJUDICATION =ADJUDICATION;
  readonly STATUS =STATUS;
  readonly FILTER_OPTIONS =FILTER_OPTIONS;
  readonly CANDIDATELIST_COLUMNS =CANDIDATELIST_COLUMNS;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private candidateService: CandidateService ,private router: Router , private _formBuilder: FormBuilder ,  private route: ActivatedRoute) {
  }

  checkboxes = this._formBuilder.group({
    "all": true,
    "clear": false,
    "consider": false,
    "engage":false,
    "adverse action":false
  });


  ngOnInit() {
    this.isLoading = true
    this.candidateService.getAllCandidates();
    this.candidateService.updatedCandidates.subscribe((candiadtes: Candidate[]) => {
    this.dataSource =   new MatTableDataSource<Candidate>(candiadtes);
    this.isLoading = false
    this.dataSource.paginator = this.paginator;
    })

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  onClickname(name){
    const id = name?.id;
    this.router.navigate(['candidatedetail/',id] , {relativeTo: this.route});
  }
  onChecked(val: string) {
    const value = this.checkboxes.value;
    const updatedValues = {
      "all": false,
      "clear": false,
      "consider": false,
      "engage":false,
      "adverse action":false
    };
    updatedValues[val] = true;
    if(val === "all"){
      this.dataSource.filter = '';
    }else{
      this.dataSource.filter = val.toLowerCase();
    }
    this.checkboxes = this._formBuilder.group(updatedValues);
  }
}
