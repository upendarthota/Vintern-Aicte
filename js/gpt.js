let ccart = [];
let cartTotal = 0;

function add(productName, price, cartimag) {
    //Parse the price as a float to ensure it's a number
    price = parseFloat(price);

    ccart.push({ productName, price, cartimag });
    cartTotal += price;
    updateCartDisplay();    
}

function removeFromCart(index) {
    const removedItem = ccart.splice(index, 1);
    cartTotal -= removedItem[0].price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('ccart-items');
    const cartTotalDisplay = document.getElementById('ccart-total');

    cartItemsList.innerHTML = '';
    ccart.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `${item.productName} - $${item.price} -${item.cartimag} <input type="number" ><button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsList.appendChild(listItem);
    });

    cartTotalDisplay.textContent = cartTotal.toFixed(2); // Display total with 2 decimal places
}
