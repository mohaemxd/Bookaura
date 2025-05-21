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

// Global variables
let resultsBox = null;
let searchInput = null;

// Initialize search functionality
function initSearch() {
    searchInput = document.getElementById('searchInput');
    resultsBox = document.getElementById('resultsBox');
    
    if (searchInput && resultsBox) {
        searchInput.addEventListener('input', handleSearch);
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
                resultsBox.style.display = 'none';
            }
        });
    }
}

// Handle search functionality
function handleSearch() {
    if (!searchInput || !resultsBox) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.length < 2) {
        resultsBox.style.display = 'none';
        return;
    }

    // Get books from localStorage or use empty array
    const books = JSON.parse(localStorage.getItem('books')) || [];
    
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );

    resultsBox.innerHTML = '';
    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const resultItem = document.createElement('div');
            resultItem.className = 'searchResult';
            resultItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <div>
                    <h4>${book.title}</h4>
                    <p>By ${book.author}</p>
                </div>
            `;
            resultItem.onclick = () => {
                window.location.href = `book.html?title=${encodeURIComponent(book.title)}`;
            };
            resultsBox.appendChild(resultItem);
        });
        resultsBox.style.display = 'block';
    } else {
        resultsBox.style.display = 'none';
    }
}

// Login functionality
function openLoginPage() {
    window.location.href = 'login.html';
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
});
