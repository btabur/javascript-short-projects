let comigNumber =Number(prompt("Bir Sayı giriniz"));
let faktoriyel=1;

for(let i =1;i<=comigNumber;i++) {
    faktoriyel*=i;
}

alert(comigNumber + "! = " +faktoriyel);