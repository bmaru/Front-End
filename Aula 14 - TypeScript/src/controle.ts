import Funcionario from "./funcionario";
export default class ControleDeBonificacoes {
    constructor(private totalDeBonificacoes: number = 0) {
    }
    public registra(fun: Funcionario): void {
        console.log("Adicionando bonificação do funcionário: " + fun);
        this.totalDeBonificacoes += fun.getBonificacao();
    }
    public getTotalDeBenificacoes(): number {
        return this.totalDeBonificacoes;
    }
}