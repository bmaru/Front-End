export default abstract class Funcionario {
    constructor(protected nome: string, protected cpf: string, protected salario: number) {
    }
    abstract getBonificacao(): number;
}