function calcular() {
    var nome = prompt("Digite seu nome: ");
    window.alert('Olá! ' + nome + ' seja bem vindo.');

    /*if (nome == 'none') {
        window.alert('Digite seu nome!');
        
    }*/
    
    var n1 = parseInt (prompt("Digite sua primeira nota: "));
    var n2 = parseInt (prompt("Digite sua segunda nota: "));

    var soma = n1+n2;

    window.alert('Sua nota total é: ' + soma);

    var media = soma/2;

    window.alert('Sua media é: ' + media);
}