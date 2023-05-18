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


//Mostrar display dados responsavel

let tipoUsuario = document.querySelector('#categoria')

tipoUsuario.addEventListener('focusout', ()=>{
    let usuario = tipoUsuario.value
    console.log(usuario)

    if (usuario == 'responsavel' || usuario == 'transporte' ) {
      let formResponsavel =  document.querySelector('#dados-responsavel')
        formResponsavel.style.display = 'block'
        formResponsavel.className = 'fieldset'
      let btnNovoResponsavel=  document.querySelector('[data-novoUsuario]')
        btnNovoResponsavel.style.display = 'block'
    }
})

console.log(tipoUsuario)

