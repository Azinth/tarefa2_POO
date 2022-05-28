class Conta{
  constructor(
    public numero: number,
    public saldo: number,
    public nome: string,
  ){}

  getSaldo(): void{
    console.log(this.saldo)
}
}
class Corrente extends Conta{
  constructor( numero: number, saldo: number, nome: string, public limite: number,
  ){
    super(numero, saldo, nome)
  }
  

  depositar(valor: number): void{
    this.saldo += valor
    console.log(`Olá ${this.nome}, seu deposito de ${valor} foi efetuado na conta ${this.numero}`)
  }
  sacar(valor: number): void{
if (valor <= this.saldo + this.limite){
  this.saldo -= valor
  console.log(`Olá ${this.nome}, seu saque de ${valor} foi efetuado na conta ${this.numero}`)
}else if( valor<=0){
  console.log("Valor inválido")
}else {
  console.log(`Olá ${this.nome}, seu saque de ${valor} foi efetuado na conta ${this.numero}`)
  console.log(`Saldo atual: ${this.saldo}`)
}
  }
}


let contas = new Corrente(25281, 1000, 'Gabriel', 500);

console.log(contas.sacar(200));
console.log(contas.getSaldo());
console.log(contas.depositar(500));
