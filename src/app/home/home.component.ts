import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../Employee';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addEmp! : FormGroup;
  addPerf! : FormGroup
  EmpSaved = false;
  EmpSaveFailed = false;
  PerfSaved = false;
  PerfSaveFailed = false;
  Empl : any;
  Profile: any;



  constructor(
    public fb: FormBuilder,
    public empService: EmployeeService
  ) { 
    this.addEmp = this.fb.group({
      name: '',
      email: '',
     })

     this.addPerf = this.fb.group({
      name: '',
      score: '',
     })

  }

  ngOnInit(): void {
    this.empService.listEmployees()
    .subscribe((rs: Employee) => {
     this.Empl = rs;
     console.log(this.Empl);

   })


  }

  addemployee(){
    this.empService.saveEmp(this.addEmp.value).subscribe(
      data  => {
        console.log(data);
        this.EmpSaved = true;
        this.EmpSaveFailed = false;
    
          },
        error => {
        this.EmpSaveFailed = true;
          console.log(error);
      })

  }

  addeperformance(){
    this.empService.getEmp(this.addPerf.value.name)
    .subscribe((rsp: any) => {
       this.Profile = rsp;
  
    this.empService.savePer(this.addPerf.value.score, this.Profile).subscribe(
      data  => {
        console.log(data);
        this.PerfSaved = true;
        this.PerfSaveFailed = false;
    
          },
        error => {
        this.PerfSaveFailed = true;
          console.log(error);
      })
      // console.log(this.Profile)
      // console.log(this.addPerf.value.score)
    })

  }

}
