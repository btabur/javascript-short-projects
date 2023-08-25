let message = `
Migros'a hoş geldiniz.
Money Kartınız var mı?

1- Evet
2- Hayır 
`;

const products = [
    {
        productName: "Süt",
        salary: 15
    },
    {
        productName: "Bebek Bezi",
        salary: 100
    },
    {
        productName: "Kuşbası",
        salary: 220
    }
]
let result =confirm(message)

if(result) {
    let amountToBePaid;
    let name =prompt("isminiz")
    let lastname =prompt("Soyadınız")
    const customer = new Musteri(name,lastname,result,products);

    amountToBePaid= customer.calculate();

   alert(
    `
    Müşteri Bilgileri : ${name} ${lastname}
    Ödenecek Tutar: ${amountToBePaid}
    `);

}else {
    const customer = new Musteri(null, null, result,products);
    amountToBePaid = customer.calculate();

    alert(`ödenecek tutar: ${amountToBePaid}`);

}