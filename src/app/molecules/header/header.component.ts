import { Component, OnInit } from '@angular/core';
import { HEADER } from 'src/app/shared/constants/constant-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  readonly HEADER=HEADER;
  constructor() { }

  ngOnInit(): void {
  }

}
