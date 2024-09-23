// Dummy users for demonstration
const users = [];

// Show login modal
document.getElementById("login-btn").addEventListener("click", function() {
    document.getElementById("login-modal").style.display = "flex";
});

// Show sign-up modal
document.getElementById("signup-btn").addEventListener("click", function() {
    document.getElementById("signup-modal").style.display = "flex";
});

// Close modals
document.getElementById("close-login").addEventListener("click", function() {
    document.getElementById("login-modal").style.display = "none";
});
document.getElementById("close-signup").addEventListener("click", function() {
    document.getElementById("signup-modal").style.display = "none";
});

// Sign Up Logic
document.getElementById("signup-submit").addEventListener("click", function() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    if (username === "" || password === "") {
        alert("All fields are required.");
        return;
    }

    users.push({ username, password });
    alert("Sign up successful! Please login.");
    document.getElementById("signup-modal").style.display = "none";
});

// Login Logic
document.getElementById("login-submit").addEventListener("click", function() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        document.getElementById("login-modal").style.display = "none";
        document.getElementById("tweet-section").style.display = "block"; // Show tweet box
    } else {
        alert("Invalid username or password.");
    }
});

// Tweet posting functionality (same as before)
document.getElementById("tweet-btn").addEventListener("click", function() {
    const tweetInput = document.getElementById("tweet-input").value;
    if (tweetInput.trim() === "") {
        alert("Tweet cannot be empty!");
        return;
    }

    const tweetList = document.getElementById("tweet-list");

    const tweet = document.createElement("div");
    tweet.classList.add("tweet");

    const tweetText = document.createElement("p");
    tweetText.textContent = tweetInput;
    tweet.appendChild(tweetText);

    const likeBtn = document.createElement("button");
    likeBtn.classList.add("like-btn");
    likeBtn.textContent = "Like";
    tweet.appendChild(likeBtn);

    const likesCount = document.createElement("span");
    likesCount.classList.add("likes");
    likesCount.textContent = " 0 Likes";
    tweet.appendChild(likesCount);

    let likes = 0;
    likeBtn.addEventListener("click", function() {
        likes++;
        likesCount.textContent = ` ${likes} Like${likes > 1 ? 's' : ''}`;
    });

    tweetList.appendChild(tweet);

    document.getElementById("tweet-input").value = "";
});  