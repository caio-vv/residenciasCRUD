const prompt = require('prompt-sync')()
const residencias = require('./residencias.js')

while (true){

    console.log(`
        1 - Criar
        2 - Listar
        3 - Atualizar
        4 - Remover
        5 - Sair
        `);


        const opcao = prompt("qual opcao deseja?: ")

        switch (opcao){
            case "1": //criar residencias
            residencias.adicionaResidencia()
                break;
                case "2": //listar
                    residencias.listarResidencias()
                    break;
                    case "3": //atiaçozar
                        residencias.atualizarResidencia()
                        break;
                        case "4": //remover
                            residencias.removerResidencias()
                            break;
                            case "5": //sair
                                process.exit()
                                break;
        }
}