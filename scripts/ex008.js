//Esta lógica consiste em identificar o maior número informado.

var v1 = 5;
var v2 = 3;
var v3 = 8;

if (v2 < v1 && v1 > v3) {
    console.log(`O maior valor digitado foi: ${v1}`)
} else if (v1 < v2 && v2 > v3) {
    console.log(`O maior valor digitado foi: ${v2}`)
} else {
    console.log(`O maior valor digitado foi: ${v3}`)
}