const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(arr) {

    stringArray = arr.filter(function onlyString(item) {
        return typeof item === 'string';
    });

    lowerStringArray = stringArray.map(function lowerCase(item) {
        return item.toLowerCase();
    });

    let p = new Promise((resolve, reject) => {
        if (lowerStringArray[0] === 'pizza' && lowerStringArray[1] === 'wings') {
            resolve("success");
        }
        else {
            reject("failure");
        }
    });

    p.then((message) => {
        console.log(message);
    })
    p.catch((message) => {
        console.log(message);
    })
    
    return lowerStringArray;  
}

console.log(lowerCaseWords(mixedArray));