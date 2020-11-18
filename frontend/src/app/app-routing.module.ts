import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseFormComponent } from './case-form/case-form.component';
import { CasesListComponent } from './cases-list/cases-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'case/all'},
  { path: 'case/all', component: CasesListComponent},
  { path: 'case/add', component: CaseFormComponent},
  { path: 'case/edit/:name', component: CaseFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
