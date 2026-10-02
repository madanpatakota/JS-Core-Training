function DownloadVideo() {
    var workName = "Video";
    console.log(`${workName} is downloading 📥`);

    setTimeout(() => {
        console.log(`${workName} has downloaded successfully 📥`);
    }, 8000);
}

function WatchInstaReels() {
    var workName = "Insta Reels";
    console.log(`I am watching ${workName} 🎬`);

    setTimeout(() => {
        console.log(`I have finished watching ${workName} 🎬`);
    }, 3000);
}

function ChatWithFriends() {
    var workName = "Friends";
    console.log(`I am chatting with my ${workName} 💬`);

    setTimeout(() => {
        console.log(`I have finished chatting with my ${workName} 💬`);
    }, 6000);
}

DownloadVideo();
WatchInstaReels();
ChatWithFriends();

/*
The three starting messages appear immediately.

Expected completion order:
1. Watching Insta Reels — after approximately 3 seconds
2. Chatting with Friends — after approximately 6 seconds
3. Downloading Video — after approximately 8 seconds
*/