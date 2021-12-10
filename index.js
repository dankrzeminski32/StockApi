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
      stockDate(data);
      //showIndex(data);
      //let upOrDown = stockUporDown(data[0].change);
      //console.log(upOrDown);
      appendData(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

// function showIndex(data) {
//   let row = document.querySelector(".index");
//   let index = trimFirstCharacter(data[0].symbol);
//   console.log(index);
//   row.innerHTML = index;
// }

//used to test if you have the correct dates of objects in array
function stockDate(data) {
  data.forEach((stock) => {
    console.log(new Date(stock.timestamp * 1000));
  });
}

function trimFirstCharacter(str) {
  return str.slice(1);
}

//function should go in img src attribute
function stockUporDown(change) {
  if (change > 0) {
    return "images/Up_green_arrow.png";
  } else {
    return "images/Red_arrow_down.png";
  }
}

function appendData(data) {
  let container = document.querySelector(".stock-widget");
  data.forEach((element) => {
    let index = trimFirstCharacter(element.symbol);
    container.innerHTML += `<div class="index">${index}</div>
    <div class="top-flex">
      <div style="font-size: 5rem;">&#128315</div>
      <div class="top-vertical-flex">
        <p>${element.change.toFixed(2)}</p>
        <p>${element.changesPercentage.toFixed(2)}%</p>
      </div>
    </div>
    <div class="current-price">
      ${element.price}
    </div><hr>`;
  });
}
