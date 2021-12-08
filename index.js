//Stock widget to evaluate the stock price and change in dow, s&p, and nasdaq...

getStocks();

function getStocks() {
  const key = "***REMOVED***";
  const fetchResponsePromise = fetch(
    "https://financialmodelingprep.com/api/v3/quote/%5EGSPC,%5EDJI,%5EIXIC?apikey=***REMOVED***"
  )
    .then((response) => {
      data = response.json();
      return data;
    })
    .then((data) => {
      console.log(data);
      stockData(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function stockData(data) {
  let stockDays = data.map((stock) => {
    let stockDay = new Date(stock.timestamp * 1000);
    console.log(stockDay);
  });

  function stockUporDown(data) {}
}
