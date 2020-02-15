class Carro {
    constructor(private fabricante: string, private modelo: string, private cor: string, private ano: number, private tetoSolar: boolean) {
    }
    private exibirDados():void {
        const mensagem = `Os dados do veículo são:
        \nFabricante: ${this.fabricante}
        \nModelo: ${this.modelo}
        \nCor: ${this.cor}
        \nAno: ${this.ano}
        \nTeto Solar: ${this.tetoSolar}`
        console.log(mensagem);
    }
}