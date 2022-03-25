function contador() {
    var list = []
    for (let i = 0; i <= 10; i++) {
        list.push(i)
    }

    for (let i = 0; i < list.length; i++) {
        document.getElementById("contador").innerHTML=list        
    }
}

function debito() {
    let paragrafo = document.createElement('p');
    paragrafo.textContent = 'Também conhecido como dívida técnica, o débito técnico é um conceito no desenvolvimento de software utilizado para representar o custo implícito de uma implementação ou solução pensada somente no agora, elaborada para suprir demandas atuais, em vez fazer uso de uma abordagem de melhor qualidade.';
    document.body.appendChild(paragrafo);
}

