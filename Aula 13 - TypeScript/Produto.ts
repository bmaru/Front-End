class Produto {
    constructor() {
    }
    mensagem() {
        console.log("Produto");
    }
}
class Produto2 extends Produto {
    constructor() {
        super();
        this.mensagem();
    }
    mensagem() {
        console.log("Produto 2");
    }
}