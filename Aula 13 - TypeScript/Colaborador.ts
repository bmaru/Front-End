class Colaborador {
    constructor(protected cargo: string, protected salario: number) {
    }
}
class Pessoa extends Colaborador {
    constructor(protected cargo: string, protected salario: number, private nome: string, private idade: number, private cidade: string) {
        super(cargo, salario);
    }
    private exibirDados():void {
        const mensagem = `Os dados da pessoa são:
        \nCargo: ${this.cargo}
        \nSalário: ${this.salario}
        \nNome: ${this.nome}
        \nIdade: ${this.idade}
        \nCidade: ${this.cidade}`
        console.log(mensagem);
    }
}