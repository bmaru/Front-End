import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  individuo: any = {};
  mensagem: string = '';
  alert: string = 'sucess';

  constructor() { }

  ngOnInit(): void {
  }

  public calcularIMC() {
    let peso = parseFloat(this.individuo.peso)
    let altura = parseFloat(this.individuo.altura)
    let result = peso / Math.pow(altura,2)
    this.mensagem = '' 
    if (result <= 16.9) {
      this.mensagem += 'Seu IMC é de: ' + result + ' Muito abaixo do peso. Quando se está abaixo do peso ideal deve-se aumentar o consumo de alimentos ricos em nutrientes para que o corpo tenha o necessário para se proteger de doenças.';
      this.alert = 'alert-danger';
    }  else if (result >= 17 && result <= 18.4) {
      this.mensagem += 'Seu IMC é de: ' + result + ' Abaixo do peso. Quando se está abaixo do peso ideal deve-se aumentar o consumo de alimentos ricos em nutrientes para que o corpo tenha o necessário para se proteger de doenças.';
      this.alert = 'alert-warning';
    } else if (result >= 18.5 && result <=24.9) {
      this.mensagem += 'Seu IMC é de: ' + result + ' Peso normal';
      this.alert = 'alert-success';
    } else if (result >= 25 && result <=29.9) {
      this.mensagem += 'Seu IMC é de: ' + result + ' Acima do peso. Quando se está acima do peso ideal deve consumir menos calorias e fazer algum tipo de atividade física para eliminar os estoques de gordura, que aumenta o risco de doenças cardíacas.';
      this.alert = 'alert-warning';
    } else if (result >= 30 && result <=34.9) {
      this.mensagem += 'Seu IMC é de: ' + result + ' Obesidade Grau I. Quando se está acima do peso ideal deve consumir menos calorias e fazer algum tipo de atividade física para eliminar os estoques de gordura, que aumenta o risco de doenças cardíacas.';
      this.alert = 'alert-danger';
    } else if (result >= 35 && result <=40) {
      this.mensagem += 'Seu IMC é de: ' + result + ' Obesidade Grau II. Quando se está acima do peso ideal deve consumir menos calorias e fazer algum tipo de atividade física para eliminar os estoques de gordura, que aumenta o risco de doenças cardíacas.';
      this.alert = 'alert-danger';
    } else if (result >= 40) {
      this.mensagem += 'Seu IMC é de: ' + result + ' Obesidade Grau III. Quando se está acima do peso ideal deve consumir menos calorias e fazer algum tipo de atividade física para eliminar os estoques de gordura, que aumenta o risco de doenças cardíacas.';
      this.alert = 'alert-danger';
    }
  }
  
}