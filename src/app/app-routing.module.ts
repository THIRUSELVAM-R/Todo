import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTaskComponent } from './show-task/show-task.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { AlterTaskComponent } from './alter-task/alter-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

const routes: Routes = [
  {path:'showtask',component:ShowTaskComponent},
  {path:'addtask',component:AddEditTaskComponent},
  {path:'alter/:id',component:AlterTaskComponent},
  {path:'delete',component:DeleteTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
