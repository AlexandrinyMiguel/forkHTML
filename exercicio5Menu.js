const readlineSync = require('readline-sync');
const prompt = require('prompt-sync')();

let opcao;

do {
    console.log("\n=== MENU PRINCIPAL ===");
    console.log("1 - Somar ");
    console.log("2 - Subtrair ");
    console.log("3 - Sair ");

    opcao = readlineSync.questionInt("Escolha uma opção: ");

    switch (opcao) {
        case 1:
            let num1 = Number(prompt("Digite o primeiro número: "));
            let num2 = Number(prompt("Digite o segundo número: "));
            console.log("O resultado é: ", num1+num2);
            break;
        
        case 2:
            let num3 = Number(prompt("Digite o primeiro número: "));
            let num4 = Number(prompt("Digite o segundo número: "));
            console.log("O resultado é: ",num3-num4);
            break;
        case 3:
            console.log("Saindo...")
            break;
        default:
            console.log("Opção invalida.")
            break;
    }
    
} while (opcao !== 3);