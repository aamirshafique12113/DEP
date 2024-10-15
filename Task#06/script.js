// Array of quotes
const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Unknown" },
  { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
  { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" }
];

// Function to generate a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to update the displayed quote and add animation
function displayQuote() {
  const quoteObj = getRandomQuote();

  // Animate the text fade-out
  document.getElementById('quote-text').classList.remove('fade-in');
  document.getElementById('quote-author').classList.remove('fade-in');

  setTimeout(() => {
    // Update the quote after the fade-out effect
    document.getElementById('quote-text').textContent = `"${quoteObj.quote}"`;
    document.getElementById('quote-author').textContent = `- ${quoteObj.author}`;

    // Animate the text fade-in
    document.getElementById('quote-text').classList.add('fade-in');
    document.getElementById('quote-author').classList.add('fade-in');
  }, 200); // Delay the update to match the fade-out duration
}

// Add event listener to the button
document.getElementById('new-quote').addEventListener('click', displayQuote);
