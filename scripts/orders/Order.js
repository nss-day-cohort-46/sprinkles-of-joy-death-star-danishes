export const Order = (customerOrder,product) => {
  return `
    <div class="order">
      <p>${new Date(customerOrder.timestamp).toLocaleString('en-US')}</p>
      <p>${customerOrder.status.label}</p>
      
    </div>
  `
}

// <p>${product.name}</p>
      // <p>$${product.price.toFixed(2)}</p>