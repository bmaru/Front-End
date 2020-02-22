import Conta from "./conta";
export default class ContaPoupanca extends Conta {
    constructor(protected saldo: number = 0)  {
        super(saldo);
    }
    public atualiza(taxa: number): void {
        this.saldo += this.saldo * taxa * 3;
    }
}