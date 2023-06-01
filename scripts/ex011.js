/*
Este código pretende descobrir o menor e o maior valor do array, e logo após apresentar
a soma dos números excluindo o maior, e a soma dos números excluindo o menor.
*/

// Código não otimizado por questões específicas durante à resolução da questão.

function somaMinMax(arr) {
    var somaMin = 0;
    var somaMax = 0;

    // descobrindo o maior número e removendo (para soma dos menores)
    if (arr[0] >= arr[1] && arr[0] >= arr[2] && arr[0] >= arr[3] && arr[0] >= arr[4]) {
        somaMin = arr[1] + arr[2] + arr[3] + arr[4];

    } else if (arr[1] >= arr[2] && arr[1] >= arr[3] && arr[1] >= arr[4] && arr[1] >= arr[0]) {
        somaMin = arr[0] + arr[2] + arr[3] + arr[4];

    } else if (arr[2] >= arr[3] && arr[2] >= arr[4] && arr[2] >= arr[0] && arr[2] >= arr[1]) {
        somaMin = arr[0] + arr[1] + arr[3] + arr[4];

    } else if (arr[3] >= arr[4] && arr[3] >= arr[0] && arr[3] >= arr[1] && arr[3] >= arr[2]) {
        somaMin = arr[0] + arr[1] + arr[2] + arr[4];

    } else if (arr[4] >= arr[0] && arr[4] >= arr[1] && arr[4] >= arr[2] && arr[4] >= arr[3]) {
        somaMin = arr[0] + arr[1] + arr[2] + arr[3];
    }

    // descobrindo o menor número e removendo (para soma dos maiores)
    if (arr[0] <= arr[1] && arr[0] <= arr[2] && arr[0] <= arr[3] && arr[0] <= arr[4]) {
        somaMax = arr[1] + arr[2] + arr[3] + arr[4];

    } else if (arr[1] <= arr[2] && arr[1] <= arr[3] && arr[1] <= arr[4] && arr[1] <= arr[0]) {
        somaMax = arr[0] + arr[2] + arr[3] + arr[4];

    } else if (arr[2] <= arr[3] && arr[2] <= arr[4] && arr[2] <= arr[0] && arr[2] <= arr[1]) {
        somaMax = arr[0] + arr[1] + arr[3] + arr[4];

    } else if (arr[3] <= arr[4] && arr[3] <= arr[0] && arr[3] <= arr[1] && arr[3] <= arr[2]) {
        somaMax = arr[0] + arr[1] + arr[2] + arr[4];

    } else if (arr[4] <= arr[0] && arr[4] <= arr[1] && arr[4] <= arr[2] && arr[4] <= arr[3]) {
        somaMax = arr[0] + arr[1] + arr[2] + arr[3];
    }

    return [somaMin, somaMax];
}

var arr = [6, 2, 3, 4, 0];
console.log(somaMinMax(arr));