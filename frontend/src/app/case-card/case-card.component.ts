import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../model/case';

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.css']
})
export class CaseCardComponent implements OnInit {

  @Input()
  case: Case;

  @Input()
  index: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.case);
  }

}
