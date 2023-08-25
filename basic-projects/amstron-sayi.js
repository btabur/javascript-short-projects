// 153 = 1*1*1 + 5*5*5 + 3*3*3    , 370  ,407
//amstrong Sayı : rakamlarının kübünün toplamına eşittir

let sayi= prompt("SAyı Giriniz");

let = toplam=0;

for(let i=0;i<sayi.length;i++) {
    let rakam = sayi[i];
    toplam += rakam**3;
}

if(Number(sayi)==toplam) {
    alert(sayi + "Bir amstrong sayısıdır");
}else {
    alert(sayi + "Bir amstrong sayısı değildir");
}