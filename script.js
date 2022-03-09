let apiQuotes = [];

// get quote from api

async function getQuotes(){
    const apiURL = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        //console.log(apiQuotes);
        let quoteNumber = Math.floor(Math.random() * apiQuotes.length)
        document.getElementById('quote').innerText = apiQuotes[quoteNumber].text;
        document.getElementById('author').innerText= apiQuotes[quoteNumber].author;
       // window.location.reload();
    }
    catch(error){}
}

document.getElementById('new-quote').addEventListener('click',getQuotes);

