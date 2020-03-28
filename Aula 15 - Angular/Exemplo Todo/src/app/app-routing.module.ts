import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';


const routes: Routes = [
  { path: 'todos/new', component: TodoComponent },
  { path: 'todos/:id', component: TodoComponent },
  { path: 'todos', component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
