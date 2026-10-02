// Demonstration: activities execute one after another.
// These messages simulate activities; they do not download a file
// or open Instagram or a chat application.

function sleep(milliseconds) {
    let startDateTime = new Date().getTime();
    let endDateTime = startDateTime + milliseconds;

    while (new Date().getTime() < endDateTime) {
        // Keep waiting.
    }
}

function FileDownload() {
    sleep(5000);
    console.log("Download completed! 📥");
}

function WatchInstagramReels() {
    sleep(3000);
    console.log("Watching Instagram Reels 🎬");
}

function ChatWithFriend() {
    sleep(8000);
    console.log("Chatting with Friends 💬");
}

// First, finish downloading.
FileDownload();

// Next, watch Instagram Reels.
WatchInstagramReels();

// Finally, chat with friends.
ChatWithFriend();


// Demo note: The blocking loop can make the Chrome page unresponsive for about 16 seconds. 
// Chrome may display the console messages together when execution finishes.

/*
Output order:
Download completed! 📥
Watching Instagram Reels 🎬
Chatting with Friends 💬

Each activity waits for the previous activity to finish.
*/