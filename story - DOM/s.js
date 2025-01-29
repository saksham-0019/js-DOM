var arr = [
    {
        dp: "https://i.pinimg.com/736x/28/f6/c7/28f6c7ea8d326ec427271f6f9cf98e7b.jpg",
        story: "https://i.pinimg.com/474x/5b/f4/12/5bf412bda6ab66c4ef35ae1fc7e84c55.jpg"
    },
    {
        dp: "https://i.pinimg.com/236x/aa/6a/cc/aa6acc6f3cccbca643d85bacde537abe.jpg",
        story: "https://i.pinimg.com/474x/7c/83/32/7c83326ad3536a00246fd3a1beb2177c.jpg"
    },
    {
        dp: "https://i.pinimg.com/236x/2b/63/f4/2b63f41abd1887670dc9554674088d58.jpg",
        story: "https://i.pinimg.com/236x/fc/66/41/fc6641fa7ff315fe7f67511b288334f3.jpg"
    },
    {
        dp: "https://i.pinimg.com/736x/77/4e/6a/774e6a53684cfb5b7d0be38fe5ae6f34.jpg",
        story: "https://i.pinimg.com/474x/10/67/4d/10674d5c9a3d0d82623167acf0c91ea5.jpg"
    },
    {
        dp: "https://i.pinimg.com/474x/9f/41/ed/9f41ede0148433ab617b8be79b52d97b.jpg",
        story: "https://i.pinimg.com/474x/a4/9a/e4/a49ae4c23f824d4d57bdca9f899172dd.jpg"
    }
];

var storyClutter = "";
arr.forEach(function (elem, idx) {
    storyClutter += `<div class="story"><img id="${idx}" src="${elem.dp}" alt="Story"></div>`;
});
document.querySelector(".story-section").innerHTML = storyClutter;

document.querySelector(".story-section").addEventListener("click", function (dets) {
    if (dets.target.tagName === "IMG") {
        var storyImage = arr[dets.target.id].story;
        var fullscreenElement = document.querySelector("#fullscreen");
        fullscreenElement.style.display = "flex";
        fullscreenElement.querySelector("img").src = storyImage;

        setTimeout(function () {
            fullscreenElement.style.display = "none";
        }, 2000);
    }
});

