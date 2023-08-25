// Benzin istasyonu

/*  
1- Dizel
2- Benzin
3- LPG

Yakıt türü
yüklenecek yakıt miktarı
bakiye

*/
let dizel=37;
let benzin= 39;
let lpg = 15;
let total;
let fuelAmount;
var money;


let fuelType = Number (prompt(`Yakıt türünü seçin
                                1- Dizel  =37
                                2- Benzin = 39
                                3- Lpg =15 `));


if(fuelType==1 || fuelType==2 ||fuelType==3) {
     fuelAmount = Number(prompt("kaç litre yakıt almak istiyorsunuz"))

     money = Number(prompt("kaç tl niz var?"))

    if(fuelType==1) {
        controlMoney(dizel)
       
    }else if(fuelType==2) {
        controlMoney(benzin);

    }else if(fuelType==3) {
        controlMoney(lpg);
    }
}else {

    alert("yakıt türü yanlış girildi")

}


function controlMoney(fuelType) {
     total = fuelAmount*fuelType;
    if(total<money) {
        alert("işlem başarılı kalan para "+ (money-total))
    }else {
        alert("para yetersiz")
    }
}