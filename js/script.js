class shortStory {
    constructor(name, price, img) {
        this.name = name;
        this.price = parseInt(price);
        this.img = img
    }
    Inserter() {
        let div = document.createElement('div');

        div.innerHTML = `
                  <div class="box" onclick="adder(this)">
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
let currencyPrice;
let price;
let Cname;
setInterval(() => {
    fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
        .then(response => response.json())
        .then(response => {
        

            document.getElementsByClassName('name')[0].innerHTML = Cname;
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


        })
        .catch(err => console.error(err));
}, 1000)
setTimeout(() => {
        Cname = array.data.coins[0].name;
            price = array.data.coins[0].price
    array.data.coins.map(item => {
        let obj = new shortStory(item.name, item.price, item.iconUrl);
        obj.Inserter();
    })
    currencyPrice = document.querySelectorAll('#currencyPrice');
    setInterval(() => {
        let i = 0;
        while (i < currencyPrice.length) {
            currencyPrice[i].innerHTML = parseInt(array.data.coins[i].price) + '$';
            i++;
        }
    }, 1000)

}, 1800)


function adder(self) {
    price = self.children[1].children[1].innerHTML;
    Cname = self.children[1].children[0].innerHTML;
    document.getElementsByClassName('priceD')[0].innerHTML = price;
    document.getElementsByClassName('name')[0].innerHTML = Cname;

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