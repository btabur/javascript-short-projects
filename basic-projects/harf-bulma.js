let sentence = prompt("bir cümle yazın");

let letter = prompt ("bir harf girin");

let sonuc =findLetterCount(sentence,letter);

alert(`${sentence} 
girdiğiniz cümlenin içerisinde  
${letter} harfi 
${sonuc} defa geçmektedir`);


function findLetterCount(sentence,letter) {
    let count=0;
    for (let i = 0; i<sentence.length;i++) {
        if(sentence[i]===letter){
            count++;
        }

    }
    return count;
}