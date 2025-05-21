var categories = [
    { name: "Fiction Books" }
];

function loadficCat(categorieName) {
    var catMainTitle = document.getElementById('categorieTitleName');
    catMainTitle.innerText = categorieName;
}


var clickedOption = document.querySelectorAll('.catoption');
var catTitle = document.querySelector('.catTitle');

clickedOption.forEach(function(a) {
    a.onclick = function(event) {
        event.preventDefault(); // Prevent the link from navigating/reloading the page
        var selectedOptionTitle = a.innerText;
        catTitle.innerText = selectedOptionTitle; // Update the category title
        loadCategoryBooks(selectedOptionTitle);
    }
});

var CategorieSelectedSection = document.querySelector(".categorieBooks"); 
function loadCategoryBooks(selectedOptionTitle) {
    CategorieSelectedSection.innerHTML = ""; // clear previous books

    var selectedCategorie = [];
    switch (selectedOptionTitle) {
        case "Fiction":
            selectedCategorie = ficBooks;
            break;
        case "Non-Fiction":
            selectedCategorie = nonficBooks;
            break;
        case "Biography":
            selectedCategorie = bioBooks;
            break;
        case "Horror":
            selectedCategorie = horrorBooks;
            break;
        case "Mystery & Thrillers":
            selectedCategorie = mysteryThrillerBooks;
            break;
        case "History":
            selectedCategorie = historyBooks;
            break;
        case "Manga":
            selectedCategorie = mangaBooks;
            break;
        case "Romance":
            selectedCategorie = romanceBooks;
            break;
        case "Self-Help & Relationships":
            selectedCategorie = selfHelpBooks;
            break; 
        case "Romance":
            selectedCategorie = romanceBooks;
            break;
        case "Sci-Fi & Fantasy":
            selectedCategorie = scifiBooks;
            break;
        default:
            selectedCategorie = [];
    }

    for (let i = 0; i < selectedCategorie.length; i++) {
        var book = document.createElement("div");
        book.classList.add("categorieBook");

        var bookimg = document.createElement("img");
        bookimg.classList.add("catbookimg");
        bookimg.src = selectedCategorie[i].bookCover;
        bookimg.alt = selectedCategorie[i].bookTitle;
        bookimg.style.cursor = "pointer";

        bookimg.onclick = function(event) {
            event.preventDefault();
            openBookPage(selectedCategorie[i].bookTitle);
        };

        var bookTitleA = document.createElement("a");
        
        bookTitleA.href = "book.html";
        bookTitleA.onclick = function(event) {
            event.preventDefault();
            openBookPage(selectedCategorie[i].bookTitle);
        };

        var bookTitleH6 = document.createElement("h6");
        bookTitleH6.classList.add("catbooktitle");
        bookTitleH6.innerText = selectedCategorie[i].bookTitle;
        bookTitleA.appendChild(bookTitleH6);

        var bookAuthorA = document.createElement("a");
        bookAuthorA.href = "author.html";
        var bookAuthorH6 = document.createElement("h6");
        bookAuthorH6.classList.add("catbookauthor");
        bookAuthorH6.innerText = selectedCategorie[i].bookAuthor;
        bookAuthorA.appendChild(bookAuthorH6);

        var bookRating = document.createElement("h6");
        bookRating.innerText = "(" + selectedCategorie[i].bookRating + "/5)";
        book.appendChild(bookimg);
        book.appendChild(bookTitleA);
        book.appendChild(bookAuthorA);
        book.appendChild(bookRating);
        CategorieSelectedSection.appendChild(book);
    }
}