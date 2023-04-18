import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { COURTSERACHES_HEADER, COURT_SEARCHES } from 'src/app/shared/constants/constant-data';

export interface CourtSearch {
  search: string;
  status: string;
  date: string;
}
const DATA: CourtSearch[] = [
  {search: "SSN Verification", status: 'Clear', date: '2/12/2021'},
  {search: "Sex Offender", status: 'Clear', date: '4/16/2021'},
  {search: "Global Watchlist", status: 'Consider', date: '5/28/2022'},
  {search: "Federal Criminal", status: 'Clear', date: '6/2/2022'},
  {search: "County Criminal", status: 'Consider', date: '7/8/2022'},


];

@Component({
  selector: 'app-court-searches',
  templateUrl: './court-searches.component.html',
  styleUrls: ['./court-searches.component.css']
})
export class CourtSearchesComponent implements OnInit {
  displayedColumns: string[] = [ 'search', 'status', 'date' ];
  readonly COURTSERACHES_HEADER =COURTSERACHES_HEADER;
  readonly COURT_SEARCHES = COURT_SEARCHES;
  dataSource = new MatTableDataSource<CourtSearch>(DATA);;

  constructor() { }

  ngOnInit(): void {
  }

}
