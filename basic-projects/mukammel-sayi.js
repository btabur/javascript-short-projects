

let number = Number(prompt("Bir sayı girin"));


alert(isPerfectNumber(number));


function isPerfectNumber (number) {

    let total =0;
    for(let i =1; i<=number/2;i++) {
        if(number%i==0) {
            total+=i;
        }
    }

    if(number==total) {
        return true;
    }else {
        return false;
    }

}