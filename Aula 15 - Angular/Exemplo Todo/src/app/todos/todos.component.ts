import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public tarefas: Todo[];
  public task: any= {};

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todosService.listar().subscribe(res => this.tarefas = res);
  }

  public editar(tarefa: Todo) {
    this.task = tarefa;
  }

  public remover(tarefa: Todo) {
    this.todosService.remover(tarefa).subscribe(
      res => {
        this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
      }
    );
  }

}