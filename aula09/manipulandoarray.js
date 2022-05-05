function criando() {     
    var nomes = ['Adriana', 'Laura', 'Mateus', 'Luis'];
    var idades = [49, 18, 7, 38];
    var pessoa = [ "Carlos", "Silva", 46 ];
    alert(nomes); 
    alert(idades); 
// para manipular um elemento por vez do array:
     alert(pessoa[0] + ' ' +  pessoa[1] + ' ' + pessoa[2] );
// para manipular um elemento por vez do array, mas de forma repetitiva:
    for (i = 0; i < nomes.length; i++) {
       para = document.createElement('p');
       para.textContent =  nomes[i] ;
       document.body.appendChild(para); 
    }
} 
    