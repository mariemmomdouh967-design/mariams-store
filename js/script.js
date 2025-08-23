// لما اضغط على زر Add to Cart
const cartButtons = document.querySelectorAll('.cart-btn');
cartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Product added to cart 🛒");
  });
});

// أيقونات الهيدر (تفاعل بسيط عند الضغط)
const icons = document.querySelectorAll('.icons a');
icons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`You clicked on: ${icon.textContent}`);
  });
});