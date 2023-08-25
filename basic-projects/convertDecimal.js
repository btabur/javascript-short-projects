let number = prompt ("ikilik tabanda bir sayı girin");


alert(convertDecimal(number));

function convertDecimal(number) {
    let sonuc=0;
    let  kuvvet = 0;
    for(let i = number.length-1 ;i>=0;i--) {
        
        sonuc+= Number(number.charAt(i))*(2**kuvvet);
        kuvvet++;
    }

    return sonuc;

}