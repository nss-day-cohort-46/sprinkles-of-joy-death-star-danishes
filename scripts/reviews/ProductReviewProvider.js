import { bakeryAPI } from "../Settings.js"

let reviews = []

const eventHub = document.querySelector("#container")

export const getReviews = () => {
    return fetch(`${bakeryAPI.baseURL}/reviews`)
        .then(response => response.json())
        .then(parsedReviews => {
            reviews = parsedReviews
        })
}


export const useReviews = () => {
    return reviews.slice()
}

export const savedReview = (review) => {
    return fetch(`${bakeryAPI.baseURL}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(getReviews)
    .then(dispatchAddReviewEvent)
}

export const dispatchAddReviewEvent = () => {
    const reviewStateChangedEvent = new CustomEvent("reviewStateChanged")
    eventHub.dispatchEvent(reviewStateChangedEvent)
}