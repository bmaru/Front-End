import Conta from "./conta";
import Tributavel from "./tributavel";
export default class ContaCorrente extends Conta implements Tributavel {
    constructor(protected saldo: number = 0)  {
        super(saldo);
    }
    public atualiza(taxa: number): void {
        this.saldo += this.saldo * taxa * 2;
    }
    public calculaTributo(): number {
        return this.saldo * 0.1;
    }
}