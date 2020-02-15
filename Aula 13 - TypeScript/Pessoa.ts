class Pessoa {
    nome: string;
    idade: number;
    cidade: string;

    exibirDados() {
        let mensagem = "Os dados pessoais são:";
        mensagem += "\nNome: " + this.nome;
        mensagem += "\nIdade: " + this.idade;
        mensagem += "\nCidade: " + this.cidade;
        alert(mensagem);
    }

    verificarIdade() {
        let mensagem = "";
        if (this.idade >= 18) {
            mensagem += "Maior de idade.";
        } 
        else {
            mensagem += "Menor de idade.";
        }
        alert(mensagem);
    }
}