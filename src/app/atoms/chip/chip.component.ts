import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  @Input() text: string="Hello";
  @Input() type: string="green";

  constructor() { }

  ngOnInit(): void {
  }

}
