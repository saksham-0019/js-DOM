var con = document.querySelector("#container");
var i = document.querySelector("i");

con.addEventListener("dblclick", function () {
    // Trigger the icon animation on double-click
    i.style.transform = "translate(-50%, -50%) scale(1)";
    i.style.opacity = 0.8;

    setTimeout(function() {
        i.style.opacity = 0;  // Smooth fade-out after a brief delay
    }, 500);  // After 0.5s (matching opacity transition)

    setTimeout(function() {
        i.style.transform = "translate(-50%, -50%) scale(0)";  // Shrink the icon back
    }, 1000);  // Wait 1s after fading out before scaling down
});
