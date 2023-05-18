const cep = document.querySelector('#cep');
// escutar evento qnd o cep for preenchido 

cep.addEventListener('focusout',()=>buscarCep(cep.value))
async function buscarCep(cep){
    let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    let respConsultaCep = await consultaCep.json();

    console.log(respConsultaCep)

    let cidade = document.querySelector('#cidade');
    let logradouro = document.querySelector('#logradouro');
    let bairro = document.querySelector('#bairro');
    let estado = document.querySelector('#estado');

    cidade.value = respConsultaCep.localidade
    logradouro.value = respConsultaCep.logradouro
    bairro.value = respConsultaCep.bairro
    estado.value = respConsultaCep.uf
}