import { Component , OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alter-task',
  templateUrl: './alter-task.component.html',
  styleUrls: ['./alter-task.component.css']
})
export class AlterTaskComponent implements OnInit{

  public Id = 0;
  public Task = "";
  List:any=[];
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{this.Id=parseInt(params['id'])})
    this.getedit();
  }
 constructor(private service:SharedService, private activatedRoute:ActivatedRoute ){}

 getedit()
 {
  //console.log(this.List.Task);

  this.service.getedittodo(this.Id).subscribe(data=>{
    this.List=data;
    this.Task=this.List.Task;
  })

 }
 update()
 {
  var val = 
  {
    Id:this.Id,
     Task:this.Task
  }
    
    this.service.updatetodo(this.Id,val).subscribe();
    //console.log(this.Id,val);
    alert("Task Edited Succesfully");
 }

}
