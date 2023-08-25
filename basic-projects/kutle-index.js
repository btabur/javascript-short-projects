
let weight = Number(prompt("Kilonuzu girin"));
let height = Number(prompt("Boyunuzu metre cinsinden girin"));

if(weight>0 || height>0) {
    let kutleIndex = weight / (height**2);
    
    console.log(kutleIndex);
    if(kutleIndex<18.5) {
        console.log( "ideal kilonun altında")
    }else if (kutleIndex>=18.5 && kutleIndex<24.9) {
        console.log( "ideal kilo");
    }
    else if (kutleIndex>=25 && kutleIndex<29.9) {
        console.log( "ideal kilonun üstünde");
    }else if (kutleIndex>=30 && kutleIndex<39.9) {
        console.log( "obez")
    }else if (kutleIndex>= 40) {
        console.log( "mega obez");
    }
}else {
        console.log("Hatalı giriş");
}