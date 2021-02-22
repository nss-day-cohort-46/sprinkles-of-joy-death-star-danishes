import { getProducts, useProducts } from '../products/ProductProvider.js'
import { authHelper } from '../auth/authHelper.js'
import { savedReview } from '../reviews/ProductReviewProvider.js'

const contentTarget = document.querySelector(".reviewForm")
const eventHub = document.querySelector("#container")

const renderForm = (products) => {
    contentTarget.innerHTML = `
        <h3>Add a New Review</h3>
        <form class="productReviewForm">
        <fieldset>            
                <label for="review-dropdown">Product: </label>
                <select id="review--product" class="reviewProduct">
                    <option value="0">Please select a product to review</option>
                    ${
                        products.map(product => {
                            return `<option value="${product.id}">${product.name}</option>`
                        }).join("")
                    }
                </select>

                <label for="review-title">Title: </label>
                <input type="text" id="review--title">
            
                <label for="review-body">Review: </label>
                <textarea name="review" rows="5" cols"20" id="review--body"></textarea>
            
                <label for="review-rating">Rating: </label>
                <select id="review--rating" id="review--rating">
                <option value="0">How would you rate this product?</option>
                    <option value="1">1 - Not great!</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 - Great!</option>
                </select>

            <button id="save--review">Leave a Review</button>
        </fieldset>
        </form>
    `
}

export const productReviewForm = () => {
    getProducts()
    .then(() => {
        console.log("products")
        const productsArray = useProducts()
        console.log(productsArray)
        renderForm(productsArray)
    })
}

eventHub.addEventListener("showNewReviewForm", productReviewForm)

eventHub.addEventListener("click", event => {
    if (event.target.id === "save--review") {

        const productId = document.getElementById("review--product").value
        const title = document.getElementById("review--title").value
        const review = document.getElementById("review--body").value
        const rating = document.getElementById("review--rating").value
        const customerId = authHelper.getCurrentUserId()
        
        const newReview = {
            productId: parseInt(productId),
            title: title,
            review: review,
            rating: rating,
            customerId: parseInt(customerId)
            }
            savedReview(newReview)
        }
})

//render form HTML
//eventListener listening for custom event "showNewReviewForm" 
//save review button - check POST
//eventlisteners for when back to main menu is clicked (another button)

//When the user performs a gesture on the "Leave A Review" button
// Then the us`er will be presented with a form with review title, body, and star rating fields.
// When a user rates a product from 1 to 5
// Then the product rating must be saved upon submitting