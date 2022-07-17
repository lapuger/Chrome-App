const quotes = [
    {
        quote:"Rebellions are built on hope.",
        author: "—Jyn, Rogue One: A Star Wars Story",                    
    },
    {
        quote:"The ability to speak does not make you intelligent.",
        author:"—Qui-Gon Jinn, The Phantom Menace",
    },
    {
       quote: "Try not. Do or do not. There is no try.",
       author:"—Yoda, Star Wars Episode V: The Empire Strikes Back",
    },
    {
        quote:"Who’s the more foolish: the fool or the fool who follows him?",
        author:"—Obi-Wan Kenobi, A New Hope",
    },
    {
        quote:"In a dark place we find ourselves and a little more knowledge lights our way.",
        author:"—Yoda, Star Wars Episode III: Revenge Of The Sith",
    },
    {
        quote:"Sometimes we must let go of our pride and do what is requested of us.",
        author:"—Anakin Skywalker, Star Wars Episode II: Attack Of The Clones",
    },
    {
        quote:"We’ll always be with you. No one’s ever really gone. A thousand generations live in you now.",
        author:"—Luke Skywalker, Star Wars Episode IX: The Rise of Skywalker",
    },
    {
        quote:"I like firsts. Good or bad, they’re always memorable.",
        author:"—Ahsoka Tano, The Mandalorian",
    },
    {
        quote:"Great, kid, don’t get cocky.",
        author:"—Han Solo, A New Hope",
    },
    {
        quote:"Congratulations. You are being rescued.",
        author:"—K-2SO, Rogue One: A Star Wars Story",
    },
    {
        quote:"I’m a Mandalorian. Weapons are part of my religion.",
        author:"—Mando, The Mandalorian",
    },
    {
        quote:"Once you start down the dark path, forever will it dominate your destiny.",
        author:"—Yoda, The Empire Strikes Back",
    },
    {
        quote:"Fear leads to anger, anger leads to hate, hate leads to suffering.",
        author:"—Yoda, The Phantom Menace",
    },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)] //Array 갯수만큼 곱함

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;