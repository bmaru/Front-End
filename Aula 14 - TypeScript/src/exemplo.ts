import Gerente from "./gerente";
import Presidente from "./presidente";
import ControleDeBonificacao from "./controle";
let ger = new Gerente("Alessandro", "071.346.319-82", 2000);
let pre = new Presidente("Bianca", "555.435.319-82", 5000);
let cb = new ControleDeBonificacao();
cb.registra(ger);
cb.registra(pre);
console.log("Bonificação:" + ger.getBonificacao());