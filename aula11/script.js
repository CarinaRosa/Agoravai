const objs = [
    {
        "nome": "Joaquim",
        "idade": 7,
        "email": "joaquim@gmail.com",
        "statusativextra": true,
        "ativextra": ["natação", "judo"]
    },
    {
        "nome": "Juliana",
        "idade": 8,
        "email": "juliana@gmail.com",
        "statusativextra": false,
        "ativextra": [null]
    }
]

console.log(objs);
console.log(typeof objs);

const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

const objjson = JSON.parse(jsonData);
console.log(objjson);
console.log(typeof objjson);

objjson.map((aluno) => {
    console.log(aluno.nome);
    console.log(aluno.email);
    console.log(aluno.idade);
})