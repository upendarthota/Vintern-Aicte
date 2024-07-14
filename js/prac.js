let ccart = [];
let cartTotal = 0;

function add(productName, price,productimag) {
    // Parse the price as a float to ensure it's a number
    price = parseFloat(price);

    ccart.push({ productName, price,productimag });
    cartTotal += price;
    updateCartDisplay();
}

function removeFromCart(index) {
    const removedItem = ccart.splice(index, 1);
    cartTotal -= removedItem[0].price;
    updateCartDisplay();
}

function updateCartDisplay() {
   // const cartItemsList = document.getElementById('ccart-items');
   // const cartTotalDisplay = document.getElementById('ccart-total');

    // 
    const cartTable = document.getElementById('ccart-table');
    const cartTotalDisplay = document.getElementById('ccart-total');
    // 


    cartTable.innerHTML = '';

    // Create a table header
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Product Name</th><th>Price</th><th>Image</th><th>Quantity</th><th>Remove</th>';
    cartTable.appendChild(headerRow);
//

//old start
    // cartItemsList.innerHTML = '';
    // ccart.forEach((item, index) => {
    //     let listItem = document.createElement('li');
    //     listItem.innerHTML = `${item.productName} - ${item.price} -<img src="${item.productimag}" width="100" height="100"><input type="number" width=""><button onclick="removeFromCart(${index})">Remove</button>`;
    //     cartItemsList.appendChild(listItem);
  
    // });

    //end old
//
// 


// 
ccart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.productName}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td><img src="${item.productimag}" alt="Product Image" width="50" height="50"></td>
        <td><input type="number" value="1" id="quantity-${index}"></td>
        <td><button onclick="removeFromCart(${index})">Remove</button></td>
    `;
    cartTable.appendChild(row);
});


    cartTotalDisplay.textContent = cartTotal.toFixed(2); // Display total with 2 decimal places
}
