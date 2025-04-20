const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Success is not in what you have, but who you are.",
    "Dream big and dare to fail.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Don't watch the clock; do what it does. Keep going."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  