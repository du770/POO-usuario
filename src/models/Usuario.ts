export class Usuario {
  #nome: string; 
  #idade: number;
  #senha: string; 

  constructor(nome: string, idade: number, senha: string) {
    this.#nome = nome;
    this.#idade = idade;
    this.#senha = senha;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.#nome} e tenho ${this.#idade} anos.`;
  }

  verificarSenha (tentativas: string): boolean {
    return this.#senha === tentativas;
  }

  redefinirSenha(novaSenha: string): void {
    this.#senha = novaSenha;
  }
}