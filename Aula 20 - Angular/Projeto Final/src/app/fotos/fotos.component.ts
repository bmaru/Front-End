import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscribable, Subscription } from 'rxjs';
import { FotosService } from '../services/fotos.service';


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  fotos: any[];
  raca: string;

  constructor(private fotosService: FotosService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      if (params['name']) {
        this.raca = params['name'];
        this.fotosService.listar(params['name']).subscribe(resp => this.fotos = resp.message);
      } 
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
