const backendDomain = "http://localhost:8080"

const SummaryApi = {
    signUP : {
        url : `${backendDomain}/api/signup`,
        method : "post"
    },
    logIn : {
        url : `${backendDomain}/api/login`,
        method : "post"
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomain}/api/userLogout`,
        method : "get"
    },
    addReview : {
        url : `${backendDomain}/api/add-review`,
        method : 'post'
    },
    allReviews : {
        url : `${backendDomain}/api/get-reviews`,
        method : 'get'
    },
    reviewsDetails : {
        url : `${backendDomain}/api/reviews-details`,
        method : 'post'
    }

}

export default SummaryApi