const fs = require('fs');

for (let i = 0; i < 10; i++) {
    fs.writeFile(`logs/log${i}.txt`, "test" , function(err) {
        if (err) {
            return console.log(err);
        }
        console.log(`log${i}.txt`);
    })
}


