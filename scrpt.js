let products =[[1,'חצוצרה',450],[2,'כינור',600],[3,'פסנתר',1200]];

let shoppingCart = [];
function addToCart(Item) {
    shoppingCart.push(products[Item]);
    renderCartFromArray();
}
function renderCartFromArray() {
    let html = '';
    for (let i = 0; i < shoppingCart.length; i+=1) {
        let product = shoppingCart[i];
        html += 
            '<div>' +
                '<span class="productName">' + product[1] +" ... "+ '</span>' +
                '<span id="productPrice">' + product[2] + '</span>' +
                '<button onclick="removeProduct(' + i + ')">הסר</button>' +
            '</div>';
    }
    document.getElementById("shoppingCart").innerHTML = html;
}


function removeProduct(product) {
    shoppingCart.splice(product, 1);
    renderCartFromArray();
}
