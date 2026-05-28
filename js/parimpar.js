const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um numero: "))

if( numero % 2 == 0 ){

    console.log("Numero par")
}else{
    console.log("Numero impar")
}



