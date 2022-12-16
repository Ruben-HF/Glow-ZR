// Add a click event listener to the "Add to Cart" button
document.querySelector('#add-to-cart').addEventListener('click', function() {
    // Get the product name and price
    var productName = document.querySelector('#product-name').textContent;
    var productPrice = document.querySelector('#product-price').textContent;
    
    // Add the product to the shopping cart
    addToCart(productName, productPrice);
  });
  
  function addToCart(name, price) {
    // Add the product to the cart array
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: name, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Update the cart count
    updateCartCount();
  }
  
  function updateCartCount() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelector('#cart-count').textContent = cart.length;
  }

  var gallery = document.querySelector('#photo-gallery');

// Set up the initial images
var images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
for (var i = 0; i < images.length; i++) {
  var img = document.createElement('img');
  img.src = images[i];
  gallery.appendChild(img);
}

// Set up the interval to change the images
setInterval(function() {
  // Remove the first image
  gallery.removeChild(gallery.firstChild);

  // Add a new image at the end
  var img = document.createElement('img');
  img.src = images[i];
  gallery.appendChild(img);

  // Increment the index
  i = (i + 1) % images.length;
}, 3000);