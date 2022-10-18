class shortStory{
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
     Inserter(params) {
         let div = document.createElement('div');
         
         div.innerHTML = `
         
         `
    }
}
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '20dc1f6bebmsh1e4ba7468a3e7d4p10babbjsn3cf5d95639f1',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};
let oldPrice = 0;
setInterval(() => {
    fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
        .then(response => response.json())
        .then(response => {
            document.getElementsByClassName('name')[0].innerHTML = response.data.coins[0].name;
            let price = response.data.coins[0].price
            price = parseInt(price)
            if (oldPrice == 0) {
                document.getElementsByClassName('priceD')[0].style.color = 'white';
            } else if (oldPrice < price) {
                document.getElementsByClassName('priceD')[0].style.color = 'green';
            }
            if (oldPrice > price) {
                document.getElementsByClassName('priceD')[0].style.color = 'red';
            }
            oldPrice = price
            document.getElementsByClassName('priceD')[0].innerHTML = price + ' $';
            // console.log(response)

        })
        .catch(err => console.error(err));
}, 1000)

let date = new Date();
let day;
switch (date.getDay()) {
    case 0: day = 'Sunday'
        break;
    case 1: day = 'Monday'
        break;
    case 2: day = 'Tuesday'
        break;
    case 3: day = 'Wednesday'
        break;
    case 4: day = 'Thursday'
        break;
    case 5: day = 'Friday'
        break;
    case 6: day = 'Saturday'
        break;


}
document.getElementsByClassName('day')[0].innerHTML = day;
document.getElementsByClassName('month')[0].innerHTML = date.toLocaleDateString();