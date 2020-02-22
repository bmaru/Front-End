import Funcionario from "./funcionario";
export default class Gerente extends Funcionario {
    constructor(protected nome: string, protected cpf: string, protected salario: number) {
        super(nome, cpf, salario);
    }
    public getBonificacao(): number {
        return this.salario * 1.4;
    }
}