
console.log("openBookPage is loaded");
var clickedBooks1 = document.querySelectorAll('.trdimg');
var clickedBooks2 = document.querySelectorAll('.bstimg');

document.getElementById("morebtn").onclick = openCategoriesPage;
function openCategoriesPage(){
    window.location.href  = "categories.html";
}

clickedBooks1.forEach(function(img){
    img.onclick = function(){
        var selectedBookTitle = img.alt;
        openBookPage(selectedBookTitle);
    }
});
clickedBooks2.forEach(function(img){
    img.onclick = function(){
        var selectedBookTitle = img.alt;
        openBookPage(selectedBookTitle);
    }
});


function openBookPage(selectedBookTitle){
    let selectedBook = allBooksObjects.find(book => book.bookTitle === selectedBookTitle);
    let selectedBookAuthor = allAuthors.find(author => author.name === selectedBook.bookAuthor);
    
    if(!selectedBook){
        console.log("Book not found");
    }
    localStorage.setItem("bookTitle", selectedBookTitle);
    localStorage.setItem("bookAuthor", selectedBook.bookAuthor || "unknown");
    localStorage.setItem("bookPrice", selectedBook.bookPrice || "unknown");
    localStorage.setItem("bookCover", selectedBook.bookCover || "unknown");
    localStorage.setItem("bookRating", selectedBook.bookRating || "unknown");
    localStorage.setItem("bookOverview", selectedBook.overview || "unknown");
    localStorage.setItem("bookIsbn", selectedBook.ISBN || "unknown");
    localStorage.setItem("bookPublisher", selectedBook.publisher || "unknown");
    localStorage.setItem("bookDate", selectedBook.publicationDate || "unknown");
    localStorage.setItem("bookPages", selectedBook.pages || "unknown");
    localStorage.setItem("bookDims", selectedBook.productDimensions || "unknown");
    localStorage.setItem("bookAuthorDob", selectedBookAuthor.dob || "unknown");
    localStorage.setItem("bookAuthorShortBio", selectedBookAuthor.shortBio || "unknown");
    localStorage.setItem("bookAuthorPic", selectedBookAuthor.pic || "unknown");
    localStorage.setItem("bookTableArray", JSON.stringify(selectedBook.tableOfContent) || "unknown");
    window.location.href = "book.html"; 
}



function openLoginPage(){
    window.location.href = "login.html";
}

const resultsBox = document.querySelector(".search-recs");
const inputBox = document.getElementById("searchbox");
inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = allBooksTitles.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        }).slice(0,4);
        console.log(result)
    }
    displaySearchResult(result);
}
function displaySearchResult(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list +"</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
function submitSearch(){
    openBookPage(inputBox.value);
}
