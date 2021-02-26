const eventHub = document.querySelector("#container")

export const Product = (product, category, productReviews) => {
    return `
      <section class="baked_good">
          <header class="baked_good__header">
              <h4>${product.name}</h4>
              <p>$${product.price}</p>
          </header>
          <div>
              <button id="addProduct--${product.id}">Add to Cart</button>
              <p>${product.description} [${category.name}]</p>

                ${productReviews.length !== 0 ? productReviews.map(review => {
                    return `<div>${review.review}</div>`
                }) : `<div>No product reviews yet</div>`}
              
          </div>
      </section>
  `
}

eventHub.addEventListener("click", evt => {
    // console.log("click heard",evt)
    if (evt.target.id.startsWith("addProduct--")) {
        const [prefix, productId] = evt.target.id.split("--")
        const addProductEvent = new CustomEvent("addToCart", {
            detail: {
                addedProduct: parseInt(productId)
            }
        })
        eventHub.dispatchEvent(addProductEvent)
    }
})

// Same conditional as ternary:
// if (productReviews.length !== 0) {
//     return `<div>${review.review}</div>`
// } else {
//     return `<div>No product reviews yet</div>`
// }