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

// Get DOM elements
const ficSection = document.getElementById('ficSection');
const nonFicSection = document.getElementById('nonFicSection');
const searchInput = document.getElementById('searchInput');
const resultsBox = document.getElementById('resultsBox');

// Book data
const books = [
    // Fiction books
    { title: "Dune", author: "Frank Herbert", category: "fiction", image: "images/Dune.jpg" },
    { title: "The Odyssey", author: "Homer", category: "fiction", image: "images/Odyssey.jpg" },
    { title: "The Hunger Games", author: "Suzanne Collins", category: "fiction", image: "images/HungerGames.jpg" },
    { title: "The Girl With The Dragon Tattoo", author: "Stieg Larsson", category: "fiction", image: "images/DragonTattoo.jpg" },
    { title: "Harry Potter And The Sorcerer's Stone", author: "J.K. Rowling", category: "fiction", image: "images/HarryPotter.jpg" },
    { title: "Jurassik Park", author: "Michael Crichton", category: "fiction", image: "images/JurassicPark.jpg" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "fiction", image: "images/Hobbit.jpg" },
    { title: "The Da Vinci Code", author: "Dan Brown", category: "fiction", image: "images/DaVinciCode.jpg" },
    { title: "It", author: "Stephen King", category: "fiction", image: "images/It.jpg" },
    { title: "Pride and Prejudice", author: "Jane Austen", category: "fiction", image: "images/PridePrejudice.jpg" },

    // Non-fiction books
    { title: "Atomic Habits", author: "James Clear", category: "non-fiction", image: "images/AtomicHabits.jpg" },
    { title: "Freakonomics", author: "Steven D. Levitt", category: "non-fiction", image: "images/Freakonomics.jpg" },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", category: "non-fiction", image: "images/7Habits.jpg" },
    { title: "Steve Jobs", author: "Walter Isaacson", category: "non-fiction", image: "images/SteveJobs.jpg" },
    { title: "Einstein: His Life and Universe", author: "Walter Isaacson", category: "non-fiction", image: "images/Einstein.jpg" },
    { title: "The Autobiography of Malcolm X", author: "Malcolm X", category: "non-fiction", image: "images/MalcolmX.jpg" },
    { title: "Man's Search for Meaning", author: "Viktor E. Frankl", category: "non-fiction", image: "images/MansSearch.jpg" },
    { title: "How to Win Friends and Influence People", author: "Dale Carnegie", category: "non-fiction", image: "images/HowToWinFriends.jpg" },
    { title: "The Power of Now", author: "Eckhart Tolle", category: "non-fiction", image: "images/PowerOfNow.jpg" },
    { title: "The Body Keeps the Score", author: "Bessel van der Kolk", category: "non-fiction", image: "images/BodyKeepsScore.jpg" }
];

// Function to create book card
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'bookCard';
    card.innerHTML = `
        <div class="bookImg">
            <img src="${book.image}" alt="${book.title} Cover">
        </div>
        <div class="bookInfo">
            <h3>${book.title}</h3>
            <h4>By ${book.author}</h4>
            <div class="bookPrice">€25.00</div>
            <button class="addToCartBtn" onclick="addToCart('${book.title}')">Add to Cart</button>
        </div>
    `;
    return card;
}

// Function to fill sections with books
function fillFicSection() {
    if (!ficSection) return;
    const fictionBooks = books.filter(book => book.category === "fiction");
    fictionBooks.forEach(book => {
        ficSection.appendChild(createBookCard(book));
    });
}

function fillNonFicSection() {
    if (!nonFicSection) return;
    const nonFictionBooks = books.filter(book => book.category === "non-fiction");
    nonFictionBooks.forEach(book => {
        nonFicSection.appendChild(createBookCard(book));
    });
}

// Search functionality
function handleSearch() {
    if (!searchInput || !resultsBox) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.length < 2) {
        resultsBox.style.display = 'none';
        return;
    }

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

// Add event listeners
if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
            resultsBox.style.display = 'none';
        }
    });
}

// Initialize page
window.onload = function() {
    fillFicSection();
    fillNonFicSection();
};