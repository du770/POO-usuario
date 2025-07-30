export class Usuario {
  #nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.#nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.#nome} e tenho ${this.idade} anos.`;
  }
}