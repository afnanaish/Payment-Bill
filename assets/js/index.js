var itemsCount = new Map([
  ["burger", 0],
  ["pizza", 0],
  ["shawarma", 0],
  ["crispy", 0],
  ["tacos", 0],
]);
const itemsPrices = new Map([
  ["burger", 6],
  ["pizza", 15],
  ["shawarma", 4],
  ["crispy", 18],
  ["tacos", 7],
]);

function addToCart(itemName) {
  var itemCount = itemsCount.get(itemName);
  itemsCount.set(itemName, itemCount + 1);
  console.log(itemsCount);

  showOrderItems();
  calculateTotalPrice();
}

function showOrderItems() {
  var iterator = itemsCount.entries();
  var allOrderItems = 0;
  for (let entry of iterator) {
    if (entry[1] > 0) {
      if (allOrderItems == 0) {
        allOrderItems = entry[0] + " : " + entry[1];
      } else {
        allOrderItems = allOrderItems + " , " + entry[0] + " : " + entry[1];
      }
    }
  }
  document.getElementById("orderItems").innerHTML = allOrderItems;
}

function calculateTotalPrice() {
  var iterator = itemsCount.entries();
  var totalPrice = 0;
  for (let entry of iterator) {
    totalPrice += entry[1] * itemsPrices.get(entry[0]);
  }
  document.getElementById("totalPrice").innerHTML =
    "Total Price = $" + totalPrice;
}
