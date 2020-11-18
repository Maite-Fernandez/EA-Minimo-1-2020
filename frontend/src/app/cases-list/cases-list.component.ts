import { ActivatedRoute } from '@angular/router';
import { CaseService } from './../services/case.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Case } from '../model/case';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.css']
})

export class CasesListComponent implements OnInit {

  cases: Case[];

  constructor(public caseService: CaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.caseService.getCases().subscribe (cases => {
      this.cases = cases;
    });
  }

}
