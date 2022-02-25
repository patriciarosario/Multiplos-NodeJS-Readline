import readline from "readline";

const rl = readline.createInterface({                                           //Cria interface readline
    input: process.stdin,
    output: process.stdout
});

pergunta();

function pergunta() {
    rl.question("Digite um número: ", numero => {                               //Pede para digitar um número

        if (parseInt(numero) === -1) {                                          //Verifica se digitou o número -1 para sair
            rl.close();
        } else{
            const multiplos = [];
            for(let i = 3; i < parseInt(numero); i++){
                if((i % 3 === 0) || (i % 5 === 0)){                             //Se resto da divisão for 0 é pq é múltiplo
                    multiplos.push(i);                                          //Guarda número no array
                }
            }
            console.log(multiplos);
            pergunta();
        }
    });
}
