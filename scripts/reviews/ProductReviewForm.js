import { getProducts, useProducts } from '../products/ProductProvider.js'
import { savedReview } from './ProductReviewProvider.js'

const contentTarget = document.querySelector(".reviewForm")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNewReviewForm", event => {
    renderForm()
})

const renderForm = (productsArray) => {
    const stringOfProductOptions = productsArray.map(product => `option value="${product.id}">${product.name}</option>`)
    contentTarget.innerHTML = `
                <label for="review-dropdown">Leave a Review for: </label>
                <select id="review--product" class="reviewProduct">
                    <option value="0">Please select a product to review</option>
                    ${stringOfProductOptions.join("")}
                </select>

                <label for="review-title">Title: </label>
                <input type="text" id="review--title">
            
                <label for="review-body">Review: </label>
                <input type="text" id="review--body">
            
                <label for="review-rating">Rating: </label>
                <input type="radio" id="review--rating">
                    <div class=”fa fa-star checked” id=”one”></div>
                    <div class=”fa fa-star unchecked” id=”two”></div>
                    <div class=”fa fa-star unchecked” id=”three”></div>
                    <div class=”fa fa-star unchecked” id=”four”></div>
                    <div class=”fa fa-star unchecked” id=”five”></div>

            <button id="save--review">Leave a Review</button>
    `
}

export const productReviewForm = () => {
    getProducts()
    .then(() => {
        const productsArray = useProducts()
        renderForm(productsArray)
    })
}

//render form HTML
//eventListener listening for custom event "showNewReviewForm" 
//save review button - check POST
//eventlisteners for when back to main menu is clicked (another button)

//When the user performs a gesture on the "Leave A Review" button
// Then the user will be presented with a form with review title, body, and star rating fields.
// When a user rates a product from 1 to 5
// Then the product rating must be saved upon submitting