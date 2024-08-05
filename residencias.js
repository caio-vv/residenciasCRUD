const prompt = require('prompt-sync')()
let residencias = []

let ultimoID = 1

const modelo = (id) => {
    const bairro = prompt("qual bairro: ")
    const rua = prompt("qual rua")
    const numero = prompt("qual numero")

    let moradores = []
    while(true){
        const moradorespromp = prompt("quais sao os moradores? ")

        if (moradorespromp == "sair"){
            break;
        } else {
            moradores.push(moradorespromp)
        }
    }

    if (bairro != "" && rua != "" && numero != "" && moradores.length > 0){
        let residencia
        if (id != undefined){
        residencia = {
        id,
        bairro, 
        rua, 
        numero, 
        moradores,
        }
    } else {
        residencia = {
            id: ultimoID,
            bairro, 
            rua, 
            numero, 
            moradores,
            }
            ultimoID++
    }
    return residencia
    }
}
const adicionaResidencia = () => {
    const residencia = modelo()
    if (residencia != undefined){
        residencias.push(residencia)
    }
    console.log(residencias)
}
const removerResidencias = () => {
    listarResidencias()
    const pegarID = prompt("qual id voce deseja remover")

    residencias.forEach((residencia, indice) => {
        if (pegarID == residencia.id){
            const confrimarRemocao = prompt("deseja mesmo remover? s para sim ")
            if (confrimarRemocao == "s"){
                residencias.splice(indice, 1)
                console.log("residencia removida")
            }
        }
    });
}
function listarResidencias() {
  residencias.forEach((residencia) => {
    console.log(
      `ID: ${residencia.id}, Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.numero}`
    );
    residencia.moradores.forEach((morador, indice) => {
      console.log(`Morador ${indice + 1}: ${morador}`);
    });
  });
}
const atualizarResidencia = () =>{
    listarResidencias()
    const pegarID = prompt("qual id voce deseja atualizar")
    const novo = modelo(pegarID)
    residencias.forEach((residencia, indice) => {
        if (pegarID == residencia.id){
            residencias[indice] = novo
        }
    })
}
module.exports = {listarResidencias, adicionaResidencia, removerResidencias, atualizarResidencia};
