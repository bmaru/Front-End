import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todo/todos/todos.component';


const routes: Routes = [
  { path: 'todo/new', component: TodosComponent },
  { path: 'todo/:id', component: TodoComponent },
  { path: 'todo', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
