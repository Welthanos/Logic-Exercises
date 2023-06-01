//Esta lógica consiste em identificar qual pessoa tem a maior idade.

const nome1 = 'Welton'
const idade1 = 24

const nome2 = 'Mantorras'
const idade2 = 26

const nome3 = 'Alek'
const idade3 = 32

if (idade2 < idade1 && idade1 > idade3) {
    console.log(`A pessoa de maior idade é ${nome1} com ${idade1} anos`)
} else if (idade1 < idade2 && idade2 > idade3) {
    console.log(`A pessoa de maior idade é ${nome2} com ${idade2} anos`)
} else {
    console.log(`A pessoa de maior idade é ${nome3} com ${idade3} anos`)
}