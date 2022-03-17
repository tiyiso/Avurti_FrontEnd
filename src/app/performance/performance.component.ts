import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  performances : any;
  emply!: Employee[];
  closeResult = '';

  constructor(
    public empService: EmployeeService,
    // private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.empService.listPerformance().subscribe((rs) => {
      this.performances = rs;
      console.log(this.performances);

    })
  }
 //delete performance
  delPerformance(data:any):void {
    console.log(data.id)
    this.empService.delete(data.id).subscribe(rpo =>{
      this.empService.listPerformance().subscribe((rs) => {
        this.performances = rs;
        console.log(this.performances);
  
      })
      console.log(rpo)
    })
  }

  editPerformance(id:any):void{

  }

  // open(content: any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason: any) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

}
