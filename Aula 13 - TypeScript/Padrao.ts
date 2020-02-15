class Padrao {
    constructor(protected nome: string, protected idade: number, protected cidade: string, protected email: string, protected telefone: number) {
    }
}
class Professor extends Padrao {
    constructor(protected nome: string, protected idade: number, protected cidade: string, protected email: string, protected telefone: number, private materia: string) {
        super(nome, idade, cidade, email, telefone)
    }
    private listar():void {
        const mensagem = `Os dados do aluno são:
        \nNome: ${this.nome}
        \nIdade: ${this.idade}
        \nCidade: ${this.cidade}
        \nEmail: ${this.email}
        \nTelefone: ${this.telefone}
        \nMatéria: ${this.materia}`
        console.log(mensagem);
    }
}
class Aluno extends Padrao {
    constructor(protected nome: string, protected idade: number, protected cidade: string, protected email: string, protected telefone: number, private nota1: number, private nota2: number) {
        super(nome, idade, cidade, email, telefone)
    }
    private listar():void {
        const mensagem = `Os dados do aluno são:
        \nNome: ${this.nome}
        \nIdade: ${this.idade}
        \nCidade: ${this.cidade}
        \nEmail: ${this.email}
        \nTelefone: ${this.telefone}
        \nNota 1: ${this.nota1}
        \nNota 2: ${this.nota2}`
        console.log(mensagem);
    }
}