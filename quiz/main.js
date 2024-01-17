const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const perguntas = [
    {
        pergunta: "Qual é o nome do protagonista da série Harry Potter?",
        opcoes: ["Ron Weasley", "Hermione Granger", "Harry Potter", "Draco Malfoy"],
        respostaCorreta: 2, // índice da opção correta
      },
      {
        pergunta: "Qual é a casa de Hogwarts à qual Harry Potter pertence?",
        opcoes: ["Lufa-Lufa", "Sonserina", "Grifinória", "Corvinal"],
        respostaCorreta: 2,
      },
      {
        pergunta: "Qual é a profissão de Harry Potter quando adulto?",
        opcoes: ["Auror", "Professor de Hogwarts", "Quadriboliro profissional", "Jornalista"],
        respostaCorreta: 0,
      },
      {
        pergunta: "Quem é o diretor de Hogwarts durante a maior parte da série?",
        opcoes: ["Dolores Umbridge", "Alastor Moody", "Severus Snape", "Alvo Dumbledore"],
        respostaCorreta: 3,
      },
      {
        pergunta: "Qual é o nome do animal de estimação de Hermione Granger?",
        opcoes: ["Edwiges", "Crookshanks", "Pigwidgeon", "Nagini"],
        respostaCorreta: 1,
      },
]


async function exibePergunta(){
    
    const numeroOpcoes = ['1', '2', '3', '4']

    for(const pergunta of perguntas){
        console.log("\n"+pergunta.pergunta + "\n")

        pergunta.opcoes.forEach((opcao, index) => {
            console.log(`${numeroOpcoes[index]} - ${opcao}`)
        });

        const resposta = await input('Digite sua resposta: ');
        console.log(`sua resposta foi: ${resposta}`)
    }

    rl.close();
}

function input(pergunta){

    return new Promise((resolved)=>{
        rl.question(pergunta, (answer) => {
            resolved(answer)
        })
    })
}

exibePergunta();