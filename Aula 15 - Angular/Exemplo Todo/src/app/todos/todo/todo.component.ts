import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task: FormGroup;

  constructor(private todosService: TodosService, private activedRoute: ActivatedRoute, private router: Router) {
    this.novoFormTarefa();
  }

  ngOnInit(): void { 
    const id = this.activedRoute.snapshot.params['id'];
    if(id) {
      this.todosService.buscarPorId(id).subscribe(resp => this.task.patchValue(resp));
    }
  }

  private novoFormTarefa(){
    this.task = new FormGroup({
      '_id': new FormControl(),
      'description': new FormControl('', Validators.required),
      'done': new FormControl('true')
    });
  }

  public adicionar() {
    this.todosService.adicionar(this.task.value).subscribe(resp => this.router.navigate(['/todos']));
  }

  public atualizar() {
    this.todosService.atualizar(this.task.value).subscribe(resp => this.router.navigate(['/todos']));
  }

}
