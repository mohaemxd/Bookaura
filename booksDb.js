var ficBooks = [
    {
        bookTitle : "Dune",
        bookAuthor: "Frank  Herbert",
        bookCover: "images/dune.jpg",
        bookRating: 5,
    },
    {
        bookTitle : "The Odyssey",
        bookAuthor: "Homer",
        bookCover: "images/the odyssey.jpg",
        bookRating: 5,
    },
    {
        bookTitle : "The Hunger Games",
        bookAuthor: "Suzanne Colins",
        bookCover: "images/The hunger Games.jpg",
        bookRating: 4,
    },
    {
        bookTitle : "The Girl With The Dragon Tattoo",
        bookAuthor: "Stieg Larsson",
        bookCover: "images/the girl with the dragon tattoo.jpg",
        bookRating: 4,
    },
    {
        bookTitle : "Harry Potter And The Sorcerer's Stone",
        bookAuthor: "J.K. Rowling",
        bookCover: "images/Harry potter and the sorcerer's stone.jpg",
        bookRating: 5,
    },
    {
        bookTitle : "Jurassik Park",
        bookAuthor: "Michael Crichton",
        bookCover: "images/Jurassik Park.jpg",
        bookRating: 4,
    },
    {
        bookTitle : "The Hobbit, or There and Back Again",
        bookAuthor: "J.R.R. Tolkien",
        bookCover: "images/The hobbit.jpg",
        bookRating: 4,
    },
];





var nonficBooks = [
    {
        bookTitle : "Thinking Fast And Slow",
        bookAuthor: "Daniel Kahneman",
        bookCover: "images/thinking fast and slow.jpg",
        bookRating: 3,
    },
    {
        bookTitle : "Atomic Habits",
        bookAuthor: "James Clear",
        bookCover: "images/Atomic Habits.jpg",
        bookRating: 4,
    },
    {
        bookTitle : "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
        bookAuthor: "Steven D. Levitt",
        bookCover: "images/Freakonomics A Rogue Economist Explores the Hidden Side of Everything.jpg",
        bookRating: 3.8,
    },
    {
        bookTitle : "Thinking Fast And Slow",
        bookAuthor: "Daniel Kahneman",
        bookCover: "images/thinking fast and slow.jpg",
        bookRating: 3,
    },
    {
        bookTitle : "Thinking Fast And Slow",
        bookAuthor: "Daniel Kahneman",
        bookCover: "images/thinking fast and slow.jpg",
        bookRating: 3,
    },
    {
        bookTitle : "Thinking Fast And Slow",
        bookAuthor: "Daniel Kahneman",
        bookCover: "images/thinking fast and slow.jpg",
        bookRating: 3,
    },
    {
        bookTitle : "Thinking Fast And Slow",
        bookAuthor: "Daniel Kahneman",
        bookCover: "images/thinking fast and slow.jpg",
        bookRating: 3,
    },
    {
        bookTitle : "Thinking Fast And Slow",
        bookAuthor: "Daniel Kahneman",
        bookCover: "images/thinking fast and slow.jpg",
        bookRating: 3,
    },
    {
        bookTitle : "Thinking Fast And Slow",
        bookAuthor: "Daniel Kahneman",
        bookCover: "images/thinking fast and slow.jpg",
        bookRating: 3,
    },
];




var bioBooks = [
    {
        bookTitle : "Steve Jobs",
        bookAuthor: "Wlter Isaacson",
        bookCover: "images/steve_jobs.jpg",
        bookRating: 5,
    },
    {
        bookTitle : "American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer",
        bookAuthor: "Kai Bird",
        bookCover: "images/American Prometheus The Triumph and Tragedy of J. Robert Oppenheimer.jpg",
        bookRating: 4.3,
    },
    {
        bookTitle : "Mao: The Unknown Story",
        bookAuthor: "Jung Chang",
        bookCover: "images/Mao The Unknown Story.jpg",
        bookRating: 5,
    },
    {
        bookTitle : "Einstein: His Life and Universe",
        bookAuthor: "Walter Isaacson",
        bookCover: "images/Einstein His Life and Universe.jpg",
        bookRating: 4.1,
    },
    {
        bookTitle : "Benjamin Franklin: An American Life",
        bookAuthor: "Walter Isaacson",
        bookCover: "images/Benjamin Franklin An American Life.jpg",
        bookRating: 4.1,
    },
    {
        bookTitle : "Galileo's Daughter: A Historical Memoir of Science, Faith, and Love",
        bookAuthor: "Dava Sobel",
        bookCover: "images/Galileo's Daughter A Historical Memoir of Science, Faith, and Love.jpg",
        bookRating: 3.7,
    },
    {
        bookTitle : "John Adams",
        bookAuthor: "David McCullough",
        bookCover: "images/john adams.jpg",
        bookRating: 4.4,
    },
    {
        bookTitle : "The Autobiography of Malcolm X",
        bookAuthor: "Malcolm X",
        bookCover: "images/The Autobiography of Malcolm X.jpg",
        bookRating: 4.4,
    },
    {
        bookTitle : "Alexander Hamilton",
        bookAuthor: "Ron Chernow",
        bookCover: "images/Alexander Hamilton.jpg",
        bookRating: 4.2,
    },
];

var allBooksTitles = [
    ...ficBooks.map(book => book.bookTitle),
    ...nonficBooks.flatMap(book => book.bookTitle),
    ...bioBooks.flatMap(book => book.bookTitle)
];
console.log(allBooksTitles);