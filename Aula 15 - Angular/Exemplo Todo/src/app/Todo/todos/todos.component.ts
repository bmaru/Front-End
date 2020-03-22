import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  task: any = {};

  constructor(private todosService: TodosService, private activedRoute: ActivatedRoute, private router: Router) {
    this.novoFormTarefa();
  }

  ngOnInit(): void {
  }

  private novoFormTarefa(){
    this.task = new FormGroup({
      '_id': new FormControl(),
      'description': new FormControl('', Validators.required),
      'done': new FormControl('true')
    });
  }

  public adicionar() {
    this.todosService.adicionar(this.task.value).subscribe();
    this.router.navigate(['/todo']);
  }

  public atualizar() {
    this.todosService.atualizar(this.task.value).subscribe();
    this.router.navigate(['/todo']);
  }

}
