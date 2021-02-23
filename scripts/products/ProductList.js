import { getProducts, useProducts } from "./ProductProvider.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { Product } from "./Product.js"
import { getReviews, useReviews } from "../reviews/ProductReviewProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".menu__items")

let bakeryProducts = []
let bakeryCategories = []
let bakeryReviews = []

export const ProductList = () => {
  getProducts()
    .then(getCategories)
    .then(getReviews)
    .then(() => {
      bakeryProducts = useProducts()
      bakeryCategories = useCategories()
      bakeryReviews = useReviews()
      render()
    })
}

const render = () => {
  contentTarget.innerHTML = bakeryProducts.map(product => {
    const productCategory = bakeryCategories.find(category => category.id === product.categoryId)

    const productReviews = bakeryReviews.filter(review => review.productId === product.id)
    console.log(productReviews)

    return Product(product, productCategory, productReviews)
  }).join("")
}

eventHub.addEventListener("categorySelected", event => {
  const categoryId = event.detail.selectedCategory
  if(categoryId !== "0") {
    bakeryProducts = useProducts().filter(product => product.categoryId === parseInt(categoryId))
    render()

  } else {
    bakeryProducts = useProducts()
    render()
  }
})
