import { savedReview } from './ProductReviewProvider.js'

const eventHub = document.querySelector("#container")

export const Product = (product, category) => {
    return `
      <section class="baked_good">
          <header class="baked_good__header">
              <h4>${product.name}</h4>
              <p>$${product.price}</p>
          </header>
          <div>
              <button id="addProduct">Add to Cart</button>
              <p>${product.description} [${category.name}]</p>
          </div>
      </section>
  `
}

eventHub.addEventListener("click", evt => {
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

//saved reviews listener

eventHub.addEventListener("saveReviewClick", clickEvent => {
    if (clickEvent.target.id === "save--review") {
        const productId = document.getElementById("review--product").value
        // const title = document.getElementById("review--title").value
        // const review = document.getElementById("review--body").value
        const rating = document.getElementById("review--rating").value

        const newReview = {
            productId: parseInt(productId),
            // title: title,
            // review: review,
            rating: rating
        }
        savedReview(newReview)
    }
})