var clickedBooks1 = document.querySelectorAll('.trdimg');
var clickedBooks2 = document.querySelectorAll('.bstimg');

document.getElementById("morebtn").onclick = openCategoriesPage;
function openCategoriesPage(){
    window.location.href  = "categories.html";
}

var booksAuthors ={
    "Steve Jobs" : "Walter Isaacson",
    "Dune" : "Frank Herbert",
    "Thinking Fast And Slow" : "Daniel Kahneman",
    "The Girl With The Dragon Tattoo" : "Stieg Larsson",
    "The Odyssey" : "Homer",
    "Atomic Habits" : "James Clear",
    "7 Habits Of Highly Effective People" : "Stephen R. Covey",
    "The Da Vinci Code" : "Dan Brown",
    "The Hunger Games" : "Suzanne Colins",
    "The Hobbit, or There and Back Again" : "J.R.R. Tolkien",
    "Jurassik Park" : "Michael Crichton",
    "Harry Potter And The Sorcerer's Stone": "J.K. Rowling",
};
var booksPrice ={
    "Steve Jobs" : 12.99,
    "Dune" : 12.99,
    "Thinking Fast And Slow" : 12.99,
    "The Girl With The Dragon Tattoo" : 12.99,
    "The Odyssey" : 12.99,
    "Atomic Habits" : 10.99,
    "7 Habits Of Highly Effective People" : 10.99,
    "The Da Vinci Code" : 12,
    "he Hunger Games" : 7,
    "The Hobbit, or There and Back Again" : 7.99,
    "Jurassik Park" : 6,
    "Harry Potter And The Sorcerer's Stone": 8,
};
var booksImages ={
    "Steve Jobs" : "images/steve_jobs.jpg",
    "Dune" : "images/dune.jpg",
    "Thinking Fast And Slow" : "images/thinking fast and slow.jpg",
    "The Girl With The Dragon Tattoo" : "images/the girl with the dragon tattoo.jpg",
    "The Odyssey" : "images/the odyssey.jpg",
    "Atomic Habits" : "images/Atomic Habits.jpg",
    "7 Habits Of Highly Effective People" : "images/7 Habits of highly effective people.jpg",
    "The Da Vinci Code" : "images/The Da vinci Code.jpg",
    "The Hunger Games" : "images/The hunger Games.jpg",
    "The Hobbit, or There and Back Again" : "images/The hobbit.jpg",
    "Jurassik Park" : "images/Jurassik Park.jpg",
    "Harry Potter And The Sorcerer's Stone": "images/Harry potter and the sorcerer's stone.jpg",
};
var booksRatings={
    "Steve Jobs" : 4,
    "Dune" : 5,
    "Thinking Fast And Slow" : 3,
    "The Girl With The Dragon Tattoo" : 4,
    "The Odyssey" : 5,
    "Atomic Habits" : 4,
    "7 Habits Of Highly Effective People" : 5,
    "The Da Vinci Code" : 5,
    "The Hunger Games" : 4,
    "The Hobbit, or There and Back Again" : 4,
    "Jurassik Park" : 4,
    "Harry Potter And The Sorcerer's Stone": 5,
};

clickedBooks1.forEach(function(img){
    img.onclick = function(){
        var bookTitle = img.alt;
        openBookPage(bookTitle);
    }
});
clickedBooks2.forEach(function(img){
    img.onclick = function(){
        var bookTitle = img.alt;
        openBookPage(bookTitle);
    }
});
function openBookPage(bookTitle){
    localStorage.setItem("bookTitle", bookTitle);
    localStorage.setItem("bookAuthor", booksAuthors[bookTitle]);
    localStorage.setItem("bookPrice", booksPrice[bookTitle]);
    localStorage.setItem("bookCover", booksImages[bookTitle]);
    localStorage.setItem("bookRating", booksRatings[bookTitle]);
    window.location.href = "book.html";
};
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
