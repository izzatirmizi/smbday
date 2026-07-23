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
    shelby: "shelby.MP4",
    uzair: "uzair.MP4",
    izza: "izza.mp4",
    arhum: "arhum.MP4",
    hadi: "hadi.MP4",
    haad: "haad.MP4",
    prachi: "prachi.MP4",
    saad: "saad.MP4"
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