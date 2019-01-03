import { Component, OnInit } from '@angular/core';
import { DataTableService} from './datatable.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
data:any=[];
searchKey:any='';
p: number = 1;
order: string = 'login';
reverse: boolean = false;
selectRow:number = 5;
 
  constructor(private service:DataTableService) {
    this.getData()
   }

  ngOnInit() {
  }
getData(){
  this.service.getData().subscribe((data:any)=>{
    this.data = data;
  })
}
setOrder(value: string) {
  if (this.order === value) {
    this.reverse = !this.reverse;
  }

  this.order = value;
}
}
