function showRandomMessage() {
    const messages = [
       "“Be the change that you wish to see in the world.”",

       "“You only live once, but if you do it right, once is enough.”",

       "“Be yourself; everyone else is already taken.”",

       "“So many books, so little time.”",

       "“If you tell the truth, you don't have to remember anything.”",

       "“A friend is someone who knows all about you and still loves you.”",

       "“Always forgive your enemies; nothing annoys them so much.”",

       "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    document.getElementById('message').textContent = randomMessage;
}

const button = document.getElementById('myButton');
button.addEventListener('click', showRandomMessage);