class Musteri extends MigrosBase {

    constructor (name, lastname, hasCard, products) {

        super(name,lastname,hasCard,products);

    }

    hesapla() {
        super.calculate();
    }
}