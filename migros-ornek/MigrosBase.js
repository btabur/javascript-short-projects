class MigrosBase {
    discountRate = 20;
    constructor (name,lastname,hasCard,products) {
        this.name=name;
        this.lastname=lastname;
        this.hasCard=hasCard;
        this.products=products;

    }
    calculate() {
        let amountToBePaid =0;
        if(this.checkProducts(this.products)) {
            //sepet dolu ise
            if(this.hasCard) {
                //kartı varsa
                this.products.forEach(product => {
                    amountToBePaid += (product.salary*(100-this.discountRate)/100);
                });
            }else {
                this.products.forEach(product => {
                    amountToBePaid += product.salary
                });
            }

         
        }else {
            alert("en az bir tane ürün ekle");
        }
        return amountToBePaid;
    }

    checkProducts(products) {
        if(products!=null && products.length>0) {
            return true;
        }

        return false;

    }
}