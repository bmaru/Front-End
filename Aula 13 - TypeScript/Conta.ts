class Conta {
    constructor(protected agencia: number, protected contaCorrente: number) {
    }
} 
class PessoaFisica extends Conta {
    constructor(protected agencia: number, protected contaCorrente: number, private nomeCliente: string, private cpf: number) {
        super(agencia, contaCorrente);
    }
    private exibirDados():void {
        const mensagem = `Os dados da conta são:
        \nAgência: ${this.agencia}
        \nConta Corrente: ${this.contaCorrente}
        \nNome do Cliente: ${this.nomeCliente}
        \nCPF: ${this.cpf}`
        console.log(mensagem);
    }
}
class PessoaJuridica extends Conta {
    constructor(protected agencia: number, protected contaCorrente: number, private nomeEmpresa: string, private cnpj: number) {
        super(agencia, contaCorrente);
    }
    private exibirDados():void {
        const mensagem = `Os dados da conta são:
        \nAgência: ${this.agencia}
        \nConta Corrente: ${this.contaCorrente}
        \nNome da Empresa: ${this.nomeEmpresa}
        \nCNPJ: ${this.cnpj}`
        console.log(mensagem);
    }
}