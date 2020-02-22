export default abstract class Conta {
    constructor(protected saldo: number) {
    }
    public deposita(valor: number) {
        this.saldo += valor; 
    }
    public saca(valor: number): void {
        if (this.saldo > valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }
    abstract atualiza(tax: number);
    public getSaldo(): number {
        return this.saldo;
    }
}