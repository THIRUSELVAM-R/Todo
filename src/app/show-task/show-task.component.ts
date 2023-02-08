import { Component , OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit{

  constructor(private service:SharedService ,private route:Router){}
  List:any=[];

  ngOnInit(): void {
    this.TaskList();
  }
  
  deleteclick(value: { Id: any; })
  {
    this.service.deletetodo(value.Id).subscribe(data=>{alert(data.toString())});
   // subscribe(data=>{alert(data.toString());
  }
  
  TaskList(){
    this.service.gettodoList().subscribe(data=>{
      this.List=data;
    });
   // console.log("HELLO iN");
  }

  alter(Id:number)
  {
      this.route.navigate(['../alter',Id.toString()]);
  }

}
