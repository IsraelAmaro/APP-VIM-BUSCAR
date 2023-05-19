import { Usuario } from "./usuario.js"
import { buscarCep, pegaCampos } from "./service-cep.js"

const botoes = document.querySelectorAll('.botao')
//Monitorar qual botão é clicado 
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.dataset.login == 'pg-login') {
            window.location.href = 'login.html'
        }
        else if (botao.dataset.cadastrar == 'pg-form') {
            window.location.href = 'cadastro.html'
        }
    })
})

console.log(usuario)

// Mostrar cadastro do responsavel

let tipoUsuario = pegaCampos().categoria

tipoUsuario.addEventListener('focusout', ()=>{
    let usuario = tipoUsuario.value
    let formResponsavel =  document.querySelector('#dados-responsavel')
    let btnNovoResponsavel=  document.querySelector('[data-novoUsuario]')
    if (usuario == 'aluno') {      
        formResponsavel.style.display = 'block'              
        btnNovoResponsavel.style.display = 'block'
    }else{
        formResponsavel.style.display = 'none'
        btnNovoResponsavel.style.display = 'none'
    }
})





