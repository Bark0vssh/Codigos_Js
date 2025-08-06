var valor = 50.000
var parcelas = 30
var juros = 4000

//Financiamento
valor*=juros
console.log("O Valor total do financiamento é de: " + valor)

// Parcelas
valor*=juros /30
console.log("O Valor total das parcelas é de: " + valor.toFixed(4))