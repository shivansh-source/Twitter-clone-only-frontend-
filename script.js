// Simulated login credentials
const validUsername = "shivansh";
const validPassword = "123";

// Handle Login
document.getElementById("loginBtn")?.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        document.getElementById("loginError").textContent = "";
        window.location.href = "home.html"; // Redirect to Home Page
    } else {
        document.getElementById("loginError").textContent = "Invalid username or password.";
    }
});

// Function to Get Tweets from localStorage
function getTweets() {
    const storedTweets = localStorage.getItem("tweets");
    return storedTweets ? JSON.parse(storedTweets) : [];
}

// Function to Save Tweets to localStorage
function saveTweets(tweets) {
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Render Tweets on Home Page
function renderTweets() {
    const tweets = getTweets();
    const tweetFeed = document.getElementById("tweetFeed");

    tweetFeed.innerHTML = ""; // Clear existing tweets

    tweets.forEach((tweet) => {
        const tweetDiv = document.createElement("div");
        tweetDiv.classList.add("tweet");
        tweetDiv.innerHTML = `
            <div><strong>${tweet.author}</strong></div>
            <div>${tweet.content}</div>
            <div><small>${tweet.timestamp}</small></div>
        `;
        tweetFeed.appendChild(tweetDiv);
    });
}

// Post a New Tweet
document.getElementById("saveTweetBtn")?.addEventListener("click", function () {
    const tweetContent = document.getElementById("tweetContent").value;

    if (tweetContent.trim()) {
        const tweets = getTweets();
        const newTweet = {
            author: "shivansh", // Simulated author
            content: tweetContent,
            timestamp: new Date().toLocaleString(),
        };

        tweets.unshift(newTweet); // Add the new tweet
        saveTweets(tweets); // Save to localStorage
        document.getElementById("tweetContent").value = ""; // Clear input
        renderTweets(); // Update tweet feed
    }
});

// Load Tweets on Home Page
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("tweetFeed")) {
        renderTweets();
    }
});
