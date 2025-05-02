
window.onload = function(){
    var title = localStorage.getItem("bookTitle");
    var author = localStorage.getItem("bookAuthor");
    var price = localStorage.getItem("bookPrice");
    var imageSrc = localStorage.getItem("bookCover");
    var bookOvrvw = localStorage.getItem("bookOverview");
    var bookIsbn = localStorage.getItem("bookIsbn");
    var bookPublisher = localStorage.getItem("bookPublisher");
    var bookDate = localStorage.getItem("bookDate");
    var bookPages = localStorage.getItem("bookPages");
    var bookDims = localStorage.getItem("bookDims");
    var bookAuthorDob = localStorage.getItem("bookAuthorDob");
    var bookAuthorShortBio = localStorage.getItem("bookAuthorShortBio");
    var bookAuthorPic = localStorage.getItem("bookAuthorPic");
    var bookTableContent = JSON.parse(localStorage.getItem("bookTableArray"));
    console.log(bookTableContent);
    document.getElementById("titleBook").textContent = title;
    document.getElementById("authorBook").textContent = author;
    document.getElementById("authorNameItem").textContent = author;
    document.getElementById("priceBook").textContent = `$${price}`;
    document.getElementById("bookTabTitle").textContent = title;
    document.getElementById("bookOverviewP").textContent = bookOvrvw;
    document.getElementById("isbnitem").textContent = bookIsbn;
    document.getElementById("publisheritem").textContent = bookPublisher;
    document.getElementById("pubdateitem").textContent = bookDate;
    document.getElementById("pagesitem").textContent = bookPages;
    document.getElementById("dimitems").textContent = bookDims;
    document.getElementById("authorDobItem").textContent = bookAuthorDob;
    document.getElementById("shortBioItem").textContent = bookAuthorShortBio;
    document.getElementById("authorPicItem").src = bookAuthorPic;
    document.getElementById("authorPicItem").title = author;
    document.getElementById("authorPicItem").alt = author +" Picture";
    var tableContList = document.getElementById("tableCont");
    for(let i=0; i<bookTableContent.length; i++){
        let listItemCont = document.createElement("li");
        listItemCont.innerText = bookTableContent[i];
        tableContList.appendChild(listItemCont);
    }

    var bookCoverElement = document.getElementById("bookcovers");
    bookCoverElement.src = imageSrc;
    bookCoverElement.alt = title;
    var rating = localStorage.getItem("bookRating");
    var ratingDisplay = document.querySelector(".starsArea");
    document.getElementById("ratingNum").textContent = "(" + rating + ")";
    for(let i =0; i<rating; i++){
        var star = document.createElement("img");
        star.src = "images/ico/star.png";
        star.alt = "star";
        star.classList.add("starIco");
        ratingDisplay.appendChild(star);
    }
    checkStars(rating);
    function checkStars(rating){
        let diff = 5 - rating;
        for(let i = 0; i< diff; i++){
            var mtstar = document.createElement("img");
            mtstar.src = "images/ico/empty-star.png";
            mtstar.alt = "star";
            mtstar.classList.add("starIco");
            ratingDisplay.appendChild(mtstar);
        }
    }
};
