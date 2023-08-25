

let number = Number(prompt("Sayı girin"));

alert(converDecimal(number));

function converDecimal(number) {
    let binary="";
    while(true) {
        binary+= (number%2).toString();
        number= Math.floor(number/2);
        if(number==1) {
            binary+=1;
            break;
        }
    }
    return reverse(binary);
}

function reverse(binary) {
    let reverseBinary= "";
    for (let i = binary.length-1;i>=0;i--){
        reverseBinary+= binary[i];
    }

    return reverseBinary;
}