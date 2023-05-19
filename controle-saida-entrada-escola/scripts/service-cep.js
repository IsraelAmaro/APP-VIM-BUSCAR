const cep = document.querySelector('#cep');
// escutar evento qnd o cep for preenchido 



cep.addEventListener('focusout',()=>buscarCep(cep.value))
export async function buscarCep(cep){
    let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    let respConsultaCep = await consultaCep.json();

    pegaCampos()

    cidade.value = respConsultaCep.localidade
    logradouro.value = respConsultaCep.logradouro
    bairro.value = respConsultaCep.bairro
    estado.value = respConsultaCep.uf
}

export function pegaCampos(){
    let dados ={
        nome: document.querySelector('#nome-user'),
        email : document.querySelector('#email'),
        senha : document.querySelector('#senha'),
        categoria : document.querySelector('#categoria'),
        cpf : document.querySelector('#cpf'),
        dataNasc : document.querySelector('#nascimento'),
        cidade : document.querySelector('#cidade'),
        logradouro : document.querySelector('#logradouro'),
        bairro : document.querySelector('#bairro'),
        estado : document.querySelector('#estado')
    
}
    return dados
}