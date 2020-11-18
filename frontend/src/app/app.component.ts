import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from './services/case.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendAngular';

  constructor(public caseService: CaseService, private router: Router) { }

  getCases(){
    this.router.navigateByUrl('/case/all');
  }
  
  addCase(){
    this.router.navigateByUrl('/case/add');
  }

  getCase(){
    this.router.navigateByUrl('/case/get');
  }

  editCase(){
    this.router.navigateByUrl('/case/edit');
  }

}
