//TODO Add from Data
// import testing from './Data/iceCreams.js';



//TODO use enums?
const ITEM_NAMES = {
  COOKIEDOUGH: 'Cookie Dough',
  VANILLA: 'Vanilla',
  STRAWBERRY: 'Strawberry',
  SPRINKLES: 'Sprinkles',
  CHOCOLATECHIPS: 'Chocolate Chips',
  GUMMYWORMS: 'Gummy Worms',
  WAFFLECONE: 'Waffle Cone',
  WAFFLEBOWL: 'Waffle Bowl',
  DIPPEDCONE: 'Dipped Cone',
  COOKIECHUNKS: 'Cookie Chunks',
  CHOCOLATE: 'Chocolate'
}

const ITEM_TYPE = {
  VESSEL: 'vessel',
  SCOOP: 'scoop',
  TOPPING: 'topping'
}

const iceCream = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
  { name: ITEM_NAMES.SPRINKLES, price: 2, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 2, quantity: 0, type: 'topping' },
  { name: 'Gummy Worms', price: 2, quantity: 0, type: 'topping' },
  { name: 'Waffle Cone', price: 3, quantity: 0, type: 'vessel' },
  { name: 'Waffle Bowl', price: 4, quantity: 0, type: 'vessel' },
  { name: 'Dipped Cone', price: 5, quantity: 0, type: 'vessel' },
  { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' },
  { name: ITEM_NAMES.CHOCOLATE, price: 4, quantity: 0, type: ITEM_TYPE.SCOOP }
]


//NOTE for 1st goal, testing
// function orderMrSprinkles() {
//   console.log('ordering Sprinkles');
//   let findSprinkles = iceCream.find(x => x.name == 'Sprinkles');
//   findSprinkles.quantity++;

//   console.log('Mr. Sprinkles: ', findSprinkles);
// }

function order(itemName) {
  const item = iceCream.find(x => x.name == itemName);

  //NOTE It item isn't found, log it.
  if (item == undefined) {
    console.log('Ice cream not found: ', item);
  }

  //IF the item is a Vessel, then make sure there is only one so it will go each one that is a vessel is set it 0
  if(item.type == ITEM_TYPE.VESSEL)
  {
    iceCream.forEach(iceCream => {
      if(iceCream.type == ITEM_TYPE.VESSEL)
      {
        iceCream.quantity = 0;
      }
    });
  }

  item.quantity++;

  //add item to list and display
  drawOrder();
  totalOrder();
}

//💵
function totalOrder() {
  let total = 0;

  //ForEach loop to get total item with Quantity * price
  iceCream.forEach(iceCream => {
    total += (iceCream.quantity * iceCream.price)
  });

  // console.log("$", total);

  const totalOrder = document.getElementById("total");
  totalOrder.innerText = `$${total.toFixed(2)}`;
}

//🛒
function drawOrder() {
  let orderContent = '';

  //Goes through each iteration of the items
  iceCream.forEach(iceCream => {

    //if statement for quantity is not 0 to be added in the list
    if (iceCream.quantity > 0) {
      orderContent += `
      <tr>
        <td>${iceCream.name}</td>
        <td>${iceCream.quantity}</td>
        <td>$${iceCream.price.toFixed(2)}</td>
        <td>$${(iceCream.price * iceCream.quantity).toFixed(2)}</td>
      <tr>
      `
    };
  });

  //Setting the cart items
  const cartList = document.getElementById('cart');
  cartList.innerHTML = orderContent;
}


function checkout() {

  const isUserCheckingOut = window.confirm('Are you sure you don\'t want to super size that?');

  if (isUserCheckingOut == true) {
    //Change to all quantity to 0 to clear everything off the board
    iceCream.forEach(iceCream => {
      iceCream.quantity = 0;
    });

    drawOrder();
    totalOrder();

    //Give response. Maybe have answers?
    window.alert("Thank you! Please come back when you have more money 🤑");
  }
  else {
    window.alert("Then keep buying!!!!");
  }
}


//TODO Create out the list of items
// function createMenu() {

//   //Set up values
//   let toppings = `<div class="row">
//           <h1>Toppings</h1>`;
//   let Vessels = `<div class="row">
//           <h1>Vessels</h1>`;

//   //Goes through each iteration of the items
//   iceCream.forEach(iceCream => {

//     switch (iceCream.type) {
//       case ITEM_TYPE.SCOOP:
//         toppings += `
//         <div class="col-4">
//             <div class="menu">
//               <div onclick="order(${iceCream.name})" role="button" title="A little bit of sugar won't hurt...">
//                 <img class="fluid-img"
//                   src=${iceCream.imageUrl}
//                   alt="${iceCream.name}">
//               </div>
//               <p class="item-price-info"> ${iceCream.name} $${iceCream.price}</p>
//             </div>
//           </div>
//         `
      
//     }
//   });
// }