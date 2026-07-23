const friends = [
    "shelby",
    "uzair",
    "izza",
    "arhum",
    "hadi",
    "haad",
    "prachi",
    "saad"
];


// Video file names
const videos = {
    shelby: "shelby.mp4",
    uzair: "uzair.mp4",
    izza: "izza.mov",
    arhum: "arhum.mp4",
    hadi: "hadi.mp4",
    haad: "haad.mp4",
    prachi: "prachi.mp4",
    saad: "saad.mp4"
};



const container = document.getElementById("giftContainer");


// Create gift boxes
friends.forEach(friend => {

    const gift = document.createElement("img");

    gift.src = `gifts/${friend}.png`;

    gift.className = "gift";

    gift.onclick = function() {
        openVideo(friend);
    };

    container.appendChild(gift);

});



// Open video popup
function openVideo(friend) {

    const popup = document.getElementById("videoPopup");

    const video = document.getElementById("birthdayVideo");

    const source = document.getElementById("videoSource");


    source.src = `videos/${videos[friend]}`;


    video.load();


    popup.style.display = "flex";


    video.play();

}



// Close popup
function closeVideo() {

    const popup = document.getElementById("videoPopup");

    const video = document.getElementById("birthdayVideo");


    video.pause();

    video.currentTime = 0;


    popup.style.display = "none";

}