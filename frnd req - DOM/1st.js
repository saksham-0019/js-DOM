document.addEventListener("DOMContentLoaded", () => {
    const nname = document.querySelector("h5");
    const addd = document.querySelector("#add");
    const card = document.getElementById("card");
    let check = 0;

    // Add click event listener to the button
    addd.addEventListener("click", function (event) {
        // Add ripple effect on button
        createRipple(event, addd);

        // Toggle friendship state
        if (check === 0) {
            check = 1;

            // Update text and styles for "friends" state
            nname.innerHTML = "Friends 😊";
            nname.style.color = "green";
            addd.innerHTML = "Remove";

            // Animate the card to bounce slightly
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease";
            setTimeout(() => {
                card.style.transform = "scale(1)";
            }, 300);

            // Glow animation on name
            nname.style.transition = "all 0.5s ease";
            nname.classList.add("glow");
        } else {
            check = 0;

            // Update text and styles for "stranger" state
            nname.innerHTML = "Stranger 😶";
            nname.style.color = "black";
            addd.innerHTML = "Add";

            // Subtle fade-out effect
            nname.style.opacity = "0.5";
            setTimeout(() => {
                nname.style.opacity = "1";
            }, 300);
        }
    });

    // Function to create ripple effect on the button
    function createRipple(event, element) {
        const circle = document.createElement("span");
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = element.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }
        element.appendChild(circle);
    }
});

