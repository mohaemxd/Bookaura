var reviews = [
    {
        username: "MohaemxdReads",
        bookRated: "Dune",
        stars: 4,
        reviewTitle:"A good Read!",
        review: "I like this books yay",
    },
];

function displayReviews(ratedBookName) {
    let thisbooksreviews = reviews.filter(review => review.bookRated === ratedBookName);
    var reviewsCont = document.getElementById('reviewsContainer');
    if(thisbooksreviews.length == 0){
        var emptyreview = document.createElement("h5");
        emptyreview.classList.add("emptyReview");
        emptyreview.innerText ="This book has no reviews yet...Yours could be the first!";
        reviewsCont.appendChild(emptyreview);
    }
    for(let i=0; i< thisbooksreviews.length; i++){
        var review = document.createElement("div");
        review.classList.add("review");

        var reviewHeader = document.createElement("div");
        reviewHeader.classList.add("review-header");
        var reviewerName = document.createElement("strong");
        reviewerName.classList.add("reviewer-name");
        reviewerName.innerText = thisbooksreviews[i].username;

        var reviewRtingDiv = document.createElement("div");
        reviewRtingDiv.classList.add("review-rating");
        var rating =thisbooksreviews[i].stars;

        for(let i =0; i<rating; i++){
            var star = document.createElement("img");
            star.src = "images/ico/star.png";
            star.alt = "star";
            star.classList.add("starIco");
            reviewRtingDiv.appendChild(star);
        }
        checkStars(rating);
        function checkStars(rating){
            let diff = 5 - rating;
            for(let i = 0; i< diff; i++){
                var mtstar = document.createElement("img");
                mtstar.src = "images/ico/empty-star.png";
                mtstar.alt = "star";
                mtstar.classList.add("starIco");
                reviewRtingDiv.appendChild(mtstar);
            }
        }


        reviewHeader.appendChild(reviewerName);
        reviewHeader.appendChild(reviewRtingDiv);

        var reviewTitleCont = document.createElement("div");
        var reviewTitle = document.createElement("strong");

        reviewTitle.innerText = thisbooksreviews[i].reviewTitle;
        reviewTitleCont.appendChild(reviewTitle);
        reviewTitleCont.classList.add("review-title");
        var reviewBody = document.createElement("div");
        reviewBody.classList.add("review-body");
        
        var theReview = document.createElement("p");
        theReview.innerText = thisbooksreviews[i].review

        reviewBody.appendChild(theReview);
        review.appendChild(reviewHeader);
        review.appendChild(reviewTitleCont);
        review.appendChild(reviewBody);
        reviewsCont.appendChild(review);
    }
}
