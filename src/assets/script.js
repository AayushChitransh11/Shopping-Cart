
let products=[];

// products with their description

  let product1={
    name:"Cherry",
    price:5,
    quantity:0,
    productId:101,
    image:"/images/cherry.jpg"
  };
  let product2={
    name:"Orange",
    price:10,
    quantity:0,
    productId:102,
    image:"/images/orange.jpg"
  };
  let product3={
    name:"Strawberry",
    price:15,
    quantity:0,
    productId:103,
    image:"/images/strawberry.jpg"
  };


products.push(product1,product2,product3);


let cart=[];
// function to add product to the cart
function addProductToCart(productId){
  let product=null;
  for(let i=0;i<products.length;i++){
    if(products[i].productId===productId){
      product=products[i];
      break;
    }
  }
  if(!product){
    console.error("Product not found!");
    return;
  }
  let foundInCart=false;
  for(let i=0;i<cart.length;i++){
    if(cart[i].productId===productId){
      cart[i].quantity+=1;
      foundInCart=true;
      break;
    }
  }
  if(!foundInCart){
    cart.push(product);
  }
  
}

// function to product increase quantity
function increaseQuantity(productId){
  for(let i=0;i<cart.length;i++){
    if(cart[i].productId===productId){
      cart[i].quantity+=1;
    }
  }
}

// function to product decrease quantity
function decreaseQuantity(productId){
  for(let i=0;i<cart.length;i++){
    if(cart[i].productId===productId){
      cart[i].quantity-=1;
      if(cart[i].quantity==0){
        cart.splice(i,1);
      }
      break;
    }
  }
}

// function to remove product from the cart
function removeProductFromCart(productId){
  for(let i=0;i<cart.length;i++){
    if(cart[i].productId===productId){
      cart[i].quantity=0;
      cart.splice(i,1);
    }
  }
}
//function to calculate the cart total
function cartTotal(){
  let total=0;
  for(let i=0;i<cart.length;i++){
    total+=cart[i].quantity * cart[i].price;
  }
  return total;
}

// function to empty the cart
function emptyCart(){
  cart.forEach(function (product){
    removeProductFromCart(product.productId);
  });
}
// function to calulate the final amount
let totalPaid = 0;

function pay(amount) {
  totalPaid += amount; 
  let remaining = cartTotal() - totalPaid; 
  if (remaining <= 0) {
    let returnCash = -remaining; 
    totalPaid = 0; 
    emptyCart(); 
    return returnCash;
  }else{
    remaining=totalPaid-cartTotal();
  }
  return remaining;
}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
