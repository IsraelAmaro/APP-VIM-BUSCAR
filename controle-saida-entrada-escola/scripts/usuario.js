export class Usuario{

    constructor(nome, email, senha, categoria, cpf, dataNasc, cep, logradouro, bairro, cidade, estado){
      
        this.nome = nome;
        this.email = email;
        this.senha= senha;
        this.categoria= categoria;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade =  cidade;
        this.estado =  estado;

    }

    toString() {
        alert(`Dados do usuário ${this.nome} => email: ${this.email} endereço: ${this.logradouro}`)
    }
}