import { Component,Input,OnInit,enableProdMode } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  Task:string ="";

  constructor(private service:SharedService){}
  

  ngOnInit(): void {
    
  }
  add(){
    var val = 
    {
       Task:this.Task
      };
   this.service.addtodo(val).subscribe(res=>{alert(res.toString()); });
   }
}
