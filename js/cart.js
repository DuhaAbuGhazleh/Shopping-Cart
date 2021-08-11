/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tBody = document.getElementsByTagName ('tbody');
  
  tBody.textContent = ' ';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    let tBody = document.getElementsByTagName ('tbody');
    let trElement=document.createElement("tr");
    tBody.appendChild(trElement);
    
    let tdQuan=document.createElement("td");
    tdQuan.textContent=cart.items[i].quantity;
   trElement.appendChild(tdQuan);

    let tdElement=document.createElement("td");
   trElement.appendChild(tdElement);

  let td=document.createElement("td");
   td.textContent=cart.items[i].name;
   trElement.appendChild(td);

    td.addEventListener('click', removeItemFromCart);
   
  
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  

}

function removeItemFromCart(event) {
  event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(parseInt(event.target.item))
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage()
  // TODO: Re-draw the cart table
  clearCart();
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
