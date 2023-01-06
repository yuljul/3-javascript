//Циклы








let numb =+prompt("Введите число")

let numb2 =+prompt("Введите степень")

let even = 1

for(let i = 0; i < numb2; i++) {
    even = even * numb;

}
alert(even)







let amount = +prompt('Введите количество переменных')
let symbol = prompt('Введите символ')
let last = prompt('Введите последний символ')

for(let i = 0; i < amount; i++ ) {

    if (i == 0) {
        last = last
    } else {
        last = symbol + last
    }

    console.log(last);
    
} 












