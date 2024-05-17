const quoteAuthor = document.getElementById("author");
const quoteText = document.getElementById("text");
const quoteBook = document.getElementById("book");
const quoteBtn = document.getElementById("new-quote");
const quoteTweet = document.getElementById("tweet-quote");

const quoteSource = "https://recite.onrender.com/random/quote-from-db";

const fetchQuote = async () => {
    try {
        const quoteFetch = await fetch(`${quoteSource}`);
        const quoteData = await quoteFetch.json();

        quoteText.innerText = quoteData.quote;
        quoteAuthor.innerText = quoteData.author;
        quoteBook.innerText = quoteData.book;
    }
    catch {
        quoteText.innerText = "Quote";
        quoteAuthor.innerText = "Author";
        quoteBook.innerText = "Book";
    }
}

const quoteBtnClick = () => {
    fetchQuote();
}

quoteBtn.addEventListener("click", quoteBtnClick);
fetchQuote();