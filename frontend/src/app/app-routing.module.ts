import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: '/subjects'},Example Path Default of Router
  //{path: 'auth', component: AuthComponent}, Example
  //{path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}, Example
  //{ path: 'newStudent/:subjectName', component: StudentFormComponent}, //Send param in route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
