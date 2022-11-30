const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000} ]


const getCheap = () => {
const prices  = [];
item.forEach(e=>{
  prices.push(e.price) 
})
console.log(prices) 
console.log('the cheapest product', item.filter(e => e.price == Math.min(...prices)))
}

const getExpensive = () =>{
    const prices  = [];
    item.forEach(e=>{
      prices.push(e.price) 
    })
    // console.log(prices) 
    console.log('the expensive product is', item.filter(e => e.price == Math.max(...prices)))
    
}

const getAllProducts = () => {
    const prices  = [];
item.forEach(e=>{
    prices.push(e.price)
})
// console.log(prices)

// console.log(item.filter(e => e.price == Math.min(...prices))) 
console.log(`Sum of all products = ${prices.reduce((a,b)=>a+b)}`)

}

const getAllProductsWithOut10 = () => {
const prices  = [];
const pricesLower10  = [];
item.forEach(e=>{
    if (e.price > 10){
         pricesLower10.push(e.price) 
    }
    prices.push(e.price)
 
})
// console.log(prices)
console.log(pricesLower10)
console.log(item.filter(e => e.price == Math.min(...prices))) 
console.log(`Sum of all products without products under 10 dollars = ${pricesLower10.reduce((a,b)=>a+b)}`)
}

getCheap();
getExpensive();
getAllProducts();
getAllProductsWithOut10();