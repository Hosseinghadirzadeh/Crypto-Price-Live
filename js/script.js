class shortStory {
    constructor(name, price, img) {
        this.name = name;
        this.price = parseInt(price);
        this.img = img
    }
    Inserter() {
        let div = document.createElement('div');

        div.innerHTML = `
                  <div class="box">
                    <figure><img src="${this.img}" alt=""></figure>
                    <div>
                        <p id="currencyName">${this.name}</p>
                        <p id="currencyPrice">${this.price}$</p>
                    </div>
                </div>
         `

        document.getElementById('wrap').appendChild(div);
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
let array;
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
            array = response;
            // console.log(response);

        })
        .catch(err => console.error(err));
}, 1000)

setTimeout(() => {
        array.data.coins.map(item => {
            let obj = new shortStory(item.name, item.price, item.iconUrl);
            obj.Inserter();
        })
    }, 1800);


let currencyPrice = document.querySelectorAll('#currencyPrice');
let currencyName = document.querySelectorAll('#currencyName');

for (let i = 0; i < array.length; i++){
    currencyPrice[i].innerHTML = array.data.coins[i].price;
}

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