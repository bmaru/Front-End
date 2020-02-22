import Funcionario from "./funcionario";
export default class Presidente extends Funcionario {
    constructor(protected nome: string, protected cpf: string, protected salario: number) {
        super(nome, cpf, salario);
    }
    public getBonificacao(): number {
        return this.salario * 2.5;
    }
}