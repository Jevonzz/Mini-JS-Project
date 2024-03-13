const quotes = [
    "Hello",
    "Hi",
    "Bye",
    "GG",
]

const usedIndex = new Set();
const quoteTag= document.getElementById("quote");

function generateQuote() {

    if(usedIndex.size === quotes.length) {
        usedIndex.clear();
    }

    while(true){
        const randomIdx = Math.floor(Math.random() * quotes.length);

         if(usedIndex.has(randomIdx)){
            continue;
         }
        const quote = quotes[randomIdx];
        quoteTag.innerHTML = quote;
        usedIndex.add(randomIdx);
        break
    }
}