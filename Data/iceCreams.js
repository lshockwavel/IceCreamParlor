//TODO Can easily add one topping/name in one place to be presented.
const iceCreams = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' }
]

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
  COOKIECHUNKS: 'Cookie Chunks'
}

const ITEM_TYPE = {
  VESSEL: 'Vessel',
  SCOOP: 'Scoop',
  TOPPING: 'Topping'
}

export default iceCreamData;