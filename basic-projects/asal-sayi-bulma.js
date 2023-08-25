

let comingNumber = Number(prompt("Bir Sayı giriniz...."))

let isAsal=true;
let bolen=0;
for(let i =2 ; i<Math.floor(comingNumber/2);i++) {
    if(comingNumber%i==0){
       isAsal=false;
       bolen=i;
       break;
    }
}
if(isAsal) {
    alert("Sayı Asal")
}else {
    alert("SAyı Asal Değil, Bölen En küçük sayı: " + bolen)
}