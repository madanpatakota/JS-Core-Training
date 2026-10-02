// Start the next activity after the current activity completes.

function DownloadVideo(callbackFn) {
    var workName = "Video";
    console.log(`${workName} is downloading 📥`);

    setTimeout(() => {
        console.log(`${workName} has downloaded successfully 📥`);

        // Start the next activity.
        callbackFn();
    }, 8000);
}

function WatchInstaReels(callbackFn) {
    var workName = "Insta Reels";
    console.log(`I am watching ${workName} 🎬`);

    setTimeout(() => {
        console.log(`I have finished watching ${workName} 🎬`);

        // Start the next activity.
        callbackFn();
    }, 3000);
}

function ChatWithFriends() {
    var workName = "Friends";
    console.log(`I am chatting with my ${workName} 💬`);

    setTimeout(() => {
        console.log(`I have finished chatting with my ${workName} 💬`);
        console.log("All activities completed! ✅");
    }, 6000);
}

function AllWorks() {
    DownloadVideo(() => {
        WatchInstaReels(() => {
            ChatWithFriends();
        });
    });
}

AllWorks();

console.log("The program can continue while the activities are waiting.");


// Correction in your last snapshot:
//  DownloadVideo(WatchInstaReels(ChatWithFriends)) calls WatchInstaReels immediately and passes its return value (undefined)
//  to DownloadVideo. Use the callback wrapper shown in AllWorks() above to preserve the intended sequence.

/*
Activity sequence:
Download Video → Watch Insta Reels → Chat with Friends

Approximate total duration: 17 seconds.
The timers do not block the browser while waiting.
*/