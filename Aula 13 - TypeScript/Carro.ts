class Carro {
    fabricante: string;
    modelo: string;
    cor: string;
    ano: number;
    tetoSolar: boolean;

    exibirDados() {
        let mensagem = "Os dados do veículo são:";
        mensagem += "\nFabricante: " + this.fabricante;
        mensagem += "\nModelo: " + this.modelo;
        mensagem += "\nCor: " + this.cor;
        mensagem += "\nAno: " + this.ano;
        mensagem += "\nTeto Solar: " + this.tetoSolar;
        alert(mensagem);
    }
}