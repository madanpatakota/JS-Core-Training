// Synchronous callbacks using the activities from your snapshots.
// These messages simulate the activities.

function FileDownload(callbackInstagramFn) {
    console.log("Download completed! 📥");
    callbackInstagramFn();
}

function WatchInstagramReels(callbackChatFn) {
    console.log("Watching Instagram Reels 🎬");
    callbackChatFn();
}

function ChatWithFriend() {
    console.log("Chatting with Friends 💬");
}

FileDownload(() => {
    WatchInstagramReels(() => {
        ChatWithFriend();
    });
});

/*
Expected output:
Download completed! 📥
Watching Instagram Reels 🎬
Chatting with Friends 💬
*/