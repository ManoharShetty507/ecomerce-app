function addToCart(itemId, itemType, button) {
  const quantityInput = button.previousElementSibling; // Get the quantity input next to the button
  const quantity = quantityInput.value;

  // Make an AJAX request to add the specified quantity of the item to the cart
  fetch(`/add_to_cart`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          item_id: itemId,
          item_type: itemType,
          quantity: quantity
      }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.status);
      }
      return response.json();
  })
  .then(data => {
      // Handle success (e.g., update the cart display)
      alert(`Added ${quantity} ${itemType} to cart!`);
      location.reload(); // Reload to see the updated cart
  })
  .catch(error => {
      console.error('Error adding to cart:', error);
  });
}
