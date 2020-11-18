import { Component, OnInit } from '@angular/core';
import { CaseService } from './../services/case.service';
import { Router } from '@angular/router';
import { Case } from '../model/case';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-case-form',
  templateUrl: './case-form.component.html',
  styleUrls: ['./case-form.component.css']
})

export class CaseFormComponent implements OnInit {

  caseForm: FormGroup;
  isSubmitted = false;


  
  constructor(public caseService: CaseService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.caseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      date: ['', [Validators.required, Validators.nullValidator]],
      dni: ['', [Validators.required, Validators.nullValidator]],
      phone:  ['', [Validators.required, Validators.nullValidator]],
      fever:  ['', [Validators.required, Validators.nullValidator]],
      cough:  ['', [Validators.required, Validators.nullValidator]],
      breathing_difficulty:  ['', [Validators.required, Validators.nullValidator]],
      general_discomfort:  ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.caseForm.controls;
  }

  // submitCase(): void {
  //   this.isSubmitted = true;
  //   if(this.caseForm.invalid){
  //     return;
  //   }

  //   const name = this.caseForm.value.name;
  //   const date = this.caseForm.value.date;
  //   const phone = this.caseForm.value.phone;
  //   const fever= this.caseForm.value.fever;
  //   const cough= this.caseForm.value.cough;
  //   const breathing_difficulty = this.caseForm.value.breathing_difficulty;
  //   const general_discomfort= this.caseForm.value.general_discomfort;

  //   let case = {
  //     'name': name, 
  //     'date': date, 
  //     'dni': dni, 
  //     'phone': phone,
  //     'fever': fever,
  //     'cough': cough,
  //     'breathing_difficulty': general_discomfort,
  //     'general_discomfort': general_discomfort


  //   };
  //   this.caseService.addCase(case).subscribe((case: Case) => {
  //   this.router.navigateByUrl('/case/all');}
}
