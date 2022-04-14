function myFunction() 
        {
            var x;
            var nome = prompt("Digite seu nome: ");

            if (nome != null) {
                x = "Nome: " + nome;
                document.getElementById("demo").innerHTML=x;
            }


        }