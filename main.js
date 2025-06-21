// this is the file for backend program of English learning web-service.
// 1. words collector: stores the user's personal actions: choosing the words to learn with.
// 2. then the algorithm suggests a various types of sentences that involves the word with different tenses and nouns with different contexts, often engaging manner
// 3. those created sentences are meant for the users to read it out-loud and look back at it anytime --> requires storage
// but first imma do practice problem.

let currencyRate= {
    USD:{
        KRW:1408.80,
        USD:1,
        GBP:0.75,
        Unit:"Dollar(s)"
    },
    KRW:{
        KRW:1,
        USD:0.00071,
        GBP:0.000531,
        Unit:"Won(s)"
    },
    GBP:{
        KRW:1867.78,
        USD:1.33,
        GBP:1,
        Unit:"Pound(s)"
    },
};

let fromCurrency = 'USD'

//console.log(currencyRate.USD.Unit)
//console.log(currencyRate['GBP']['Unit']) --> better!
document
    .querySelectorAll("#from-currency-list a")
    .forEach((menu) => menu.addEventListener("click", function(){
        document.getElementById("from-button").textContent=this.textContent //this. fucntion calls the user's action such as click and replaces the text contents to the according action
        fromCurrency = this.textContent;
        convert()
        

    })
);

let toCurrency = 'KRW'
document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click", function() {
        document.getElementById("to-button").textContent=this.textContent //this. fucntion calls the user's action such as click and replaces the text contents to the according action
        toCurrency = this.textContent;
        convert()
        
    }
));
document.querySelectorAll("#to-currency-list a")


//create new function for convert() from onkeyup thing form html


function convert(type){
    console.log("here");
    let amount =0;
    if (type == "from"){
        amount = doctument.getElementById("from-input").value;
        let convertedAmount = amount *currencyRate[fromCurrency][toCurrency];
        document.getElementById("to-input").value = convertedAmount;
    }
    else {
        amount = document.getElementById("to-input").value;
        let convertedAmount = amount * currencyRate[toCurrency][fromCurrency];
        document.getElementById("from-input").value = convertedAmount;

    }
}
 //unit conv

//now convert the currency units accordingly to the dropsets
//and also renewing automatically as we change the currencies:

/*function renderUnit(from, to) {
    document.getElementById("fromNumToUnit").textContent =
        readNum(from) + currencyRate[fromCurrency].unit;
    document.getElementById("toNumToUnit").textContent =
        readNum(to) + currencyRate[toCurrency].unit;
}*/

