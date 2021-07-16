const form  = document.getElementById('form') /*pega o formulário "form" lá no html*/

/*ações do formulário abaixo*/
form.addEventListener('submit', (e) => {

    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `carregando...`
    let pronto = `Cadastrado!`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000);
})

