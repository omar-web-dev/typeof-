// C = (F - 32)*(5/9)

function celsias(f){
    const farent = (f-32)*(5/9)
    return farent
} 

const celsiasValue = celsias(40)
let celsiasToFixed = celsiasValue.toFixed(celsiasToFixed)
let id = parseInt(celsiasToFixed)
console.log(id);