// Synchronous callbacks with the delays from your snapshots.
// sleep() uses a busy-wait loop and blocks the browser's main thread.
// This demonstration blocks for approximately 15 seconds in total.

function sleep(milliseconds) {
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime + milliseconds;

    while (new Date().getTime() < endDateTime) {
        // Keep executing the loop until the end time is reached.
    }
}

function FileDownload(callbackInstagramFn) {
    sleep(5000); // Block for approximately 5 seconds.

    console.log("Download completed! 📥");

    callbackInstagramFn();
}

function WatchInstagramReels(callbackChatFn) {
    sleep(4000); // Block for approximately 4 seconds.

    console.log("Watching Instagram Reels 🎬");

    callbackChatFn();
}

function ChatWithFriend() {
    sleep(6000); // Block for approximately 6 seconds.

    console.log("Chatting with Friends 💬");
}

FileDownload(() => {
    WatchInstagramReels(() => {
        ChatWithFriend();
    });
});

/*
Execution order:
1. Wait approximately 5 seconds.
2. Log: Download completed! 📥
3. Wait approximately 4 seconds.
4. Log: Watching Instagram Reels 🎬
5. Wait approximately 6 seconds.
6. Log: Chatting with Friends 💬

Each callback executes directly before its calling function returns.
These delays are synchronous and blocking.
Chrome may display the messages together after the blocking code finishes.
*/