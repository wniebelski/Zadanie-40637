
function dzialanie (num1, num2) {
    let result;
    if (num1+num2 > 0 && num1-num2 > 0 && num1/num2 > 0 ){
        result = 'Wynik dodawania wynosi' + (num1+num2)+'Wynik odejmowania wynosi' + (num1-num2) + 'Wynik mnożenia wynosi' + (num1*num2);
        } else {
            result = 'Wynik jest nieprawidłowy';
    }
    return result
}
console.log (dzialanie(20, 10));


