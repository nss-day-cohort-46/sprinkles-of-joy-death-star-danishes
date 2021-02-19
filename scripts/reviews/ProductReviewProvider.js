let reviews = []

export const getReviews = () => {
    return fetch('http://localhost:8088/reviews')
        .then(response => response.json())
        .then(parsedReviews => {
            reviews = parsedReviews
        })
}

export const savedReview = (reviewObj) => {
    return fetch('http://localhost:8088/reviews', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObj)
    })
    .then(getReviews)
    .then(dispatchStateChangeEvent)
}

export const useReviews = () => {
    return reviews.slice()
}