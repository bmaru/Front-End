import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: any[];

  constructor(private produtosService: ProdutoService) { }

  ngOnInit(): void {
    this.produtosService.listar().subscribe(res => this.produtos = res);
  }

}

