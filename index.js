import headerFunc from "./header.js";
import productsFunc from "./products.js"


//! add product to localstroge start

(async function getData(){
    const photos= await fetch("./data.json");
    const data =await photos.json();

    data ? localStorage.setItem("products",JSON.stringify(data)) : [];
   productsFunc();

})()


//! add product to localstroge end


//!cartitems start
const products = localStorage.getItem("products");
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";


//  !card-items end