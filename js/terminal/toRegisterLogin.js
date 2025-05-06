criarConta = document.getElementById('criarConta');
irLogar = document.getElementById('irLogar');

criarConta.addEventListener('click', () => {
    document.getElementById('loginField').classList.add('d-none');
    document.getElementById('registerField').classList.remove('d-none');
})

irLogar.addEventListener('click', () => {
    document.getElementById('loginField').classList.remove('d-none');
    document.getElementById('registerField').classList.add('d-none');
})