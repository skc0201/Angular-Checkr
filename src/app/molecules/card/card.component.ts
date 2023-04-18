import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit  {
  @Input() imgSrc: string;
  @Input() header1: string;
  @Input() header2: string;
  constructor() {
  }

  ngOnInit(): void {
    if(this.header1 === 'Adjudication' && this.header2 === ""){
      this.header2="-";
    }
  }

}
