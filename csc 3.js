const prompt = require("prompt-sync")();

function reversedString(str) {

    const revstr = str.split('').reverse().join('');
    return revstr;
}

function evenOddString(str) {
    let newstr = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            newstr += str[i].toUpperCase();
        } else {
            newstr += str[i];
        }
    }
    return newstr;
}

function asciiNum(str) {
    let newstr = '';
    for (let i = 0; i < str.length; i++) {

        if (i % 2 == 0) {
            newstr += str.charCodeAt(i);
        }
        else {
            newstr += str[i];
        }
    }
    return newstr;




}

function decreasingStr(str) {
    let newstr = [];
    for (let i = 0; i < str.length; i++) {
        newstr[i] = str.charCodeAt(i);

    }
    newstr = newstr.sort().join(' | ');
    return newstr;
}
function nextLetter(str) {

    let newstr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let finalstr = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < newstr.length; j++) {
            if (newstr[j] == str[i]) {
                if (str[i] == "z") {
                    finalstr = str[i].replace("z", "a");
                } else if (str[i] == "Z") {
                    finalstr = str[i].replace("Z", "A");
                }
                else {
                    finalstr += newstr[j + 1];
                }
                break;
            }

        }
    }


    return finalstr;
}

function stringToletter(str) {
    let newstr = "abcdefghijklmnopqrstuvwxyz";   //thanasis
    let emptystr = " ";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < newstr.length; j++) {

            if (str[i] == newstr[j]) {
                emptystr += (j + 1) + " | ";
                break;
            }

        }
    }

    return emptystr;


}

function consonantTovowel(str) {

    let emptystr = "";


    let newstr1 = "aeiouAEIOU";
    let newstr2 = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXZ"




    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < newstr1.length; j++) {

            if (newstr1[j] == str[i]) {
                emptystr += newstr1[j];
                break;
            }
        }
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < newstr2.length; j++) {

            if (newstr2[j] == str[i]) {
                emptystr += newstr2[j];
                break;
            }
        }
    }
    return emptystr;
}










//----------------------------------- main
console.log("-------------------");
console.log('ASCII of A: ', "A".charCodeAt(0));


let str, i = 0;
console.log('Please insert string >= 6 and <= 12')
do {
    str = prompt();
    i++;
} while (str.length < 6 || str.length > 12 && str[i] > 'a'.toUpperCase && str[i] < 'z'.toUpperCase);


console.log('i will print the result  with different ways!');
console.log(reversedString(str));
console.log(evenOddString(str));
console.log(asciiNum(str));
console.log(decreasingStr(str));
console.log(nextLetter(str));
console.log(stringToletter(str));
console.log(consonantTovowel(str));
