//jshint esversion:6
const https = require("https");

exports.getQuotes = function () {
    const url1 = "https://dummyjson.com/quotes/random";
    
    https.get(url1, (response) => {
        console.log(response.statusCode);
        //console.log(response.headers);

        response.on("data", (data) => {
            //process.stdout.write(data);
            const quotesData = JSON.parse(data);
            console.log(quotesData);
//            const text = quotesData.quote;
//            const author = quotesData.author;
//            console.log(text + " " + author);

        })
            .on('error', (e) => {
                console.error(e);
            })
    });

    return temp; 

};