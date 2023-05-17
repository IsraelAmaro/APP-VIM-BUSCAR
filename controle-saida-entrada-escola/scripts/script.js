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




