function fillFicSection(){
    var ficSection = document.getElementById('ficcatclass');
    for(let i=0; i<ficBooks.length; i++){
        var ficbook = document.createElement("div");
        ficbook.classList.add("catbook");

        var bookimg = document.createElement("img");
        bookimg.src = ficBooks[i].bookCover;
        bookimg.classList.add("bookimgc");
        bookimg.alt = ficBooks[i].bookTitle;

        var bookTitleA = document.createElement("a");
        bookTitleA.href = "book.html";
        bookTitleA.onclick = function(event) {
            event.preventDefault();
            openBookPage(ficBooks[i].bookTitle);
        };
        bookimg.style.cursor = "pointer";
        bookimg.onclick = function() {
            var selectedBookTitle = ficBooks[i].bookTitle;
            openBookPage(selectedBookTitle);
        };
        
        var bookTitleH6 = document.createElement("h6");
        bookTitleH6.innerText = ficBooks[i].bookTitle;
        bookTitleH6.classList.add("catbooktitle");
        bookTitleA.appendChild(bookTitleH6);
        var bookAuthorA = document.createElement("a");
        bookAuthorA.href = "author.html"
        var bookAuthorH6 = document.createElement("h6");
        bookAuthorH6.innerText = ficBooks[i].bookAuthor;
        bookAuthorH6.classList.add("catbookauthor");
        bookAuthorA.appendChild(bookAuthorH6);
        
        var bookRating = document.createElement("h6");
        bookRating.innerText = "("+ficBooks[i].bookRating + "/5)";
        bookRating.classList.add("rating");


        ficbook.appendChild(bookimg);
        ficbook.appendChild(bookTitleA);
        ficbook.appendChild(bookAuthorA);
        ficbook.appendChild(bookRating);
        ficSection.appendChild(ficbook);
    }
}
function fillNonFicSection(){
    var nonficSection = document.getElementById('nonficcatclass');
    for(let i=0; i<nonficBooks.length; i++){

        var nonficbook = document.createElement("div");
        nonficbook.classList.add("catbook");

        var bookimg = document.createElement("img");
        bookimg.src = nonficBooks[i].bookCover;

        bookimg.style.cursor = "pointer";
        bookimg.onclick = function() {
            var selectedBookTitle = nonficBooks[i].bookTitle;
            openBookPage(selectedBookTitle);
        };
        var bookTitleA = document.createElement("a");
        bookTitleA.href = "book.html";
        bookTitleA.onclick = function (event) {
            event.preventDefault(); 
            openBookPage(nonficBooks[i].bookTitle); 
        };
        var bookTitleH6 = document.createElement("h6");
        bookTitleH6.innerText = nonficBooks[i].bookTitle;
        bookTitleH6.classList.add("catbooktitle");
        bookTitleA.appendChild(bookTitleH6);
        
        var bookAuthorA = document.createElement("a");
        bookAuthorA.href = "author.html"
        var bookAuthorH6 = document.createElement("h6");
        bookAuthorH6.innerText = nonficBooks[i].bookAuthor;
        bookAuthorH6.classList.add("catbookauthor");
        bookAuthorA.appendChild(bookAuthorH6);
        
        var bookRating = document.createElement("h6");
        bookRating.innerText = "("+ nonficBooks[i].bookRating + "/5)";
        bookRating.classList.add("rating");


        nonficbook.appendChild(bookimg);
        nonficbook.appendChild(bookTitleA);
        nonficbook.appendChild(bookAuthorA);
        nonficbook.appendChild(bookRating);
        nonficSection.appendChild(nonficbook);
    }
}
function fillBioSection(){
    var bioSection = document.getElementById('biocatclass');
    for(let i=0; i<bioBooks.length; i++){

        var book = document.createElement("div");
        book.classList.add("catbook");

        var bookimg = document.createElement("img");
        bookimg.src = bioBooks[i].bookCover;
        bookimg.alt.innerText = bioBooks[i].bookTitle;
        bookimg.style.cursor = "pointer";
        
        bookimg.onclick = function (event) {
            event.preventDefault(); 
            openBookPage(bioBooks[i].bookTitle); 
        };
        var bookTitleA = document.createElement("a");
        bookTitleA.href = "book.html";
        bookTitleA.onclick = function (event) {
            event.preventDefault(); 
            openBookPage(bioBooks[i].bookTitle); 
        };
        bookimg.classList.add("bookimgc");
        var bookTitleH6 = document.createElement("h6");
        bookTitleH6.innerText = bioBooks[i].bookTitle;
        bookTitleH6.classList.add("catbooktitle");
        bookTitleA.appendChild(bookTitleH6);
        
        var bookAuthorA = document.createElement("a");
        bookAuthorA.href = "author.html"
        var bookAuthorH6 = document.createElement("h6");
        bookAuthorH6.innerText = bioBooks[i].bookAuthor;
        bookAuthorH6.classList.add("catbookauthor");
        bookAuthorA.appendChild(bookAuthorH6);
        
        var bookRating = document.createElement("h6");
        bookRating.innerText = "("+ bioBooks[i].bookRating + "/5)";
        bookRating.classList.add("rating");


        book.appendChild(bookimg);
        book.appendChild(bookTitleA);
        book.appendChild(bookAuthorA);
        book.appendChild(bookRating);
        bioSection.appendChild(book);
    }
}

function fillHorrorSection(){
    var horrorSection = document.getElementById('horrorcatclass');
    for(let i=0; i<horrorBooks.length; i++){

        var book = document.createElement("div");
        book.classList.add("catbook");

        var bookimg = document.createElement("img");
        bookimg.src = horrorBooks[i].bookCover;
        bookimg.alt.innerText = horrorBooks[i].bookTitle;
        bookimg.style.cursor = "pointer";
        
        bookimg.onclick = function (event) {
            event.preventDefault(); 
            openBookPage(horrorBooks[i].bookTitle);
        };
        var bookTitleA = document.createElement("a");
        bookTitleA.href = "book.html";
        bookTitleA.onclick = function (event) {
            event.preventDefault();
            openBookPage(horrorBooks[i].bookTitle); 
        };
        bookimg.classList.add("bookimgc");
        var bookTitleH6 = document.createElement("h6");
        bookTitleH6.innerText = horrorBooks[i].bookTitle;
        bookTitleH6.classList.add("catbooktitle");
        bookTitleA.appendChild(bookTitleH6);
        
        var bookAuthorA = document.createElement("a");
        bookAuthorA.href = "author.html"
        var bookAuthorH6 = document.createElement("h6");
        bookAuthorH6.innerText = horrorBooks[i].bookAuthor;
        bookAuthorH6.classList.add("catbookauthor");
        bookAuthorA.appendChild(bookAuthorH6);
        
        var bookRating = document.createElement("h6");
        bookRating.innerText = "("+ horrorBooks[i].bookRating + "/5)";
        bookRating.classList.add("rating");


        book.appendChild(bookimg);
        book.appendChild(bookTitleA);
        book.appendChild(bookAuthorA);
        book.appendChild(bookRating);
        horrorSection.appendChild(book);
    }
}


window.onload = function(){
    fillFicSection();
    fillNonFicSection();
    fillBioSection();
    fillHorrorSection();
    var clickedBooks = document.querySelectorAll('.bookimgc');
};


const resultsBox = document.querySelector(".search-recs");
const inputBox1 = document.getElementById("searchrequest");
inputBox1.onkeyup = function(){
    let result = [];
    let input = inputBox1.value;
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
    inputBox1.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
function submitSearch(){
    openBookPage(inputBox1.value);
}
