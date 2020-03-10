import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  titulo: string = "Apex Ensino";
  texto: string = "Aprendendo Angular";
  url: string = "http://apexensino.com.br";
  imagem: string = "https://s2.glbimg.com/c6znTptH9M_-ripd7CYcbq2VaAs=/0x0:624x351/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/C/s/CBDv0tTOqsGVQhuhCFJw/onda-foto-wsl.jpg";
  
  campo: string = "Bianca";
  gostandoDeAngular: boolean = true;
  cor: string = "vermelho";
  numero: number = 3;
  cidades: string[] = ["Florianópolis", "São José", "Palhoça", "Biguaçu", "Rio Vermelho"]
  fonte: boolean = true; 
  numeros: number[] = [1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
  }

  alterarNumero(e): void {
    //this.numero = e.target.value;
  }

  avisar(): void {
    alert("Seja bem vindo!" + this.campo)
  }

}
