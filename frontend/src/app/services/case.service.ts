import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Case } from '../model/case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http:HttpClient) { }
  getCases(){
    return this.http.get<Case[]>(environment.apiURL + '/case/all');
  }

  addCase(newCase: Case) {
    return this.http.post(environment.apiURL + '/case/add', newCase);
  }

  getCase(name: string) {
    return this.http.get(environment.apiURL + '/case/get/' + name);
  }

  editCase(editCase: Case){
    return this.http.post(environment.apiURL + '/case/edit', editCase);
  }
}
