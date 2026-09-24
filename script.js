const botao = document.querySelector('#btn-contato');

botao.onclick = function() {
    const nameCliente = prompt('Olá! Qual é o seu nome?');  
    const numeroTelefone = '5579996473439'
    const mensagem = encodeURIComponent(`Olá, sou o(a) ${nameCliente} e vim pelo seu cartão digital!`);
    const linkWhatsapp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
    window.open(linkWhatsapp, '_blank');

}