fetch('https://api.coingecko.com/api/v3/global')
    .then(result => result.json())
    .then(data => {
        console.log(data.data.total_market_cap.btc)
    })