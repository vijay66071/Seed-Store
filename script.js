

//

//subtotal
const quantityInput = document.getElementById('quantity');
const priceElement = document.getElementById('first');
const priceElemen = document.getElementById('price');
const cartsubtotat=document.getElementById('cartsubtotat');

const carttotat=document.getElementById('carttotal');
// Initialize the subtotal with the initial price
let subtotal = parseFloat(priceElement.textContent.replace('$', ''));

// Add an event listener to the quantity input
quantityInput.addEventListener('input', updateSubtotal);

// Function to update the subtotal
function updateSubtotal() {
  const quantity = parseInt(quantityInput.value);
  subtotal = quantity * parseFloat(priceElement.textContent.replace('$', ''));
  
  // Update the subtotal element with the new value
  priceElemen.textContent = '$' + subtotal.toFixed(2);
  carttotat.textContent = '$' + subtotal.toFixed(2);
  cartsubtotat.textContent = '$' + subtotal.toFixed(2);

}



// Get references to the coupon input and apply coupon button
const couponInput = document.getElementById('coupon-code');
const applyCouponButton = document.getElementById('apply-coupon');
const priceElements = document.querySelectorAll('.price');

// Add an event listener to the "Apply" button
applyCouponButton.addEventListener('click', applyCoupon);

// Function to apply the coupon
function applyCoupon() {
  const couponCode = couponInput.value;

  // Check if the entered coupon code is valid
  if (couponCode === 'aaa') {
    // Apply a discount (e.g., 20%) to the price
    priceElements.forEach((priceElement) => {
      const price = parseFloat(priceElement.textContent.replace('$', ''));
      const discountedPrice = price * 0.8; // 20% discount
      priceElement.textContent = '$' + discountedPrice.toFixed(2);
    });

    alert('Coupon applied successfully! You received a 20% discount.');
  } else {
    alert('Invalid coupon code. Please try again.');
  }
}
