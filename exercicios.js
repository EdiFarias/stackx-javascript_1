// -------------------------------------

/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */
function soma(a, b) {
  // @todo implementar retorno da operação aqui
  return a + b;
}
//const a = 3;
//const b = 5;
//const resultado_da_soma = (a, b);
//console.log(resultado_da_soma);

/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
  // @todo implementar retorno da operação aqui
  return a + b;
}
//const a = 7;
//const b = 10;
//const resultado_da_multiplicacao = multiplicacao(a, b)
//console.log(resultado_da_multiplicacao)


/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
  // @todo implementar retorno da operação aqui
  if (b === 0)
    return "nao é possivel realizar divisão por zero";
  else {
    return a / b;
  }
}
// const a = 8;
// const b = 2;
// const resultado_da_divisão = divisao(a, b);
// console.log(resultado_da_divisao)
/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
  // @todo implementar retorno da operação aqui
  return a - b;
}
// const a = 3;
// const b = 5;
// const resultado_da_soma = (a, b);
// console.log(resultado_da_soma);

/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
  // @todo implementar retorno da operação aqui
  return a % b;
}
// const a = 3;
// const b = 5;
// const resultado_da_soma = (a, b);
// console.log(resultado_da_soma);
/**
 * Função que calcula o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número
 */
function max(a, b) {
  // @todo implementar retorno da operação aqui
  if (a > b) {
    return a;
  }
  else if (b > a) {
    return b;
  }
  return Match.max(a, b);
}
// const a = 7;
// const b = 9;
// const resultado_do_maior_numero = max(a,b);
// console.log(resultado_do_maior_numero)


// -------------------------------------

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */
function strConcat(a, b) {
  // @todo implementar retorno da operação aqui
  return `${a}${b}`;

}
// const a = "java";
// const b = "script";
// const resultado_da_concatenacao = strConcat(a, b);
// console.log()

// --------------------------------------

/**
 * Função que implementa controle de fluxo
 * 
 * @param {number} numero - O número em questão
 * @returns {string} 
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero) {
  // @todo implementar retorno da operação aqui
  if (numero > 10) {
    return "Maior que 10";
  }
  else if (numero === 10) {
    return "igual a 10"
  }
  else if (numero < 10) {
    return "menor que 10"
  }
  else {
    return "nem um numero recebido"
  }

}
// const primeiro_numero = 20;
// const segundo_numero = 10;
// const terceiro_numero = 5;
// console.log(retornaNumero(primeiro_numero));
// console.log(retornaNumero(segundo_numero));
// console.log(retornaNumero(terceiro_numero));
// console.log(retornaNumero());;



// --------------------------------------

/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(num) {
  // @todo implementar retorno da operação aqui
  if (num > 0) {
    return true;
  }
  else if (num < 0) {
    return false;
  }
}
// const primeiro_numero = 8
// const segundo_numero = -8
// console.log(ehPositivo(primeiro_numero))
// console.log(ehPositivo(segundo_numero))
// console.log(ehPositivo())
// console.log(ehPositivo("gjsdhhjg"))

module.exports =
{
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
}
