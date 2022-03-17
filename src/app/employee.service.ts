import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './Employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private saveEmpUrl = 'http://localhost:8088/addemployee';
  private listEmpUrl = 'http://localhost:8088/listemplyees';
  private savePerfUrl = 'http://localhost:8088/addperformance';
  private getEmptbyName = 'http://localhost:8088/profile';
  private listPerUrl ='http://localhost:8088/listperformance';
  private delPerUrl ='http://localhost:8088/delete';

  constructor(
    private http: HttpClient
  ) { }
    //save Employee
    saveEmp(emp: Employee){
      return this.http.post<any>(this.saveEmpUrl,emp,httpOptions )
    }

    //list employees
    listEmployees(): Observable<any> {
      return this.http.get<Employee[]>(this.listEmpUrl, httpOptions).pipe(
      map((res: any) => {
        return res || {}
      }),
      
    )
  }

     //save performance
     savePer(score: number, employee:Employee[]){
      return this.http.post<any>(this.savePerfUrl,{score,employee},httpOptions )
    }

    getEmp(pickedEmp:any): Observable<any> {
      let EmpUrl = `${this.getEmptbyName}/${pickedEmp}`;
      return this.http.get(EmpUrl, httpOptions).pipe(
        map((res) => {
          return res || {}
        }),
    
      )
    }
    //list performance
    listPerformance(): Observable<any> {
      return this.http.get(this.listPerUrl, httpOptions).pipe(
      map((res: any) => {
        return res || {}
      }),
     )
    }

    //delete performance

    delete(id:any): Observable<any> {
      let dUrl = `${this.delPerUrl}/${id}`;
      return this.http.get(dUrl, httpOptions).pipe(
        map((res) => {
          return res || {}
        }),
    
      )
    }
}


