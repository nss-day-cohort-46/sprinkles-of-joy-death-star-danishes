import { getReviews, useReviews, savedReview } from './ProductReviewProvider.js'

const contentTarget = document.querySelector(".reviewForm")
const eventHub = document.querySelector(".container")

//render form HTML
//eventListener listening for custom event "showNewReviewForm" 
//save review button - check POST
//eventlisteners for when back to main menu is clicked (another button)

//When the user performs a gesture on the "Leave A Review" button
// Then the user will be presented with a form with review title, body, and star rating fields.
// When a user rates a product from 1 to 5
// Then the product rating must be saved upon submitting