document.querySelectorAll("#footer a").forEach(link => {
    const originalText = link.textContent;
    const hoverText = link.dataset.hover;

    if (!hoverText) return;

    link.addEventListener("mouseenter", () => {
        link.textContent = hoverText;
    });

    link.addEventListener("mouseleave", () => {
        link.textContent = originalText;
    });
});

const deflectionMessages = [
    "Let's not pry, shall we?",
    "Oh, there's nothing to see here!",
    "There's no one here but me",
    "Keep going, there's something it doesn't want you to find",
    "Let's keep our hands off of there",
    "STOP CLICKING AROUND"
];

document.querySelectorAll("#footer .corruptDeflection").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const randomIndex = Math.floor(
            Math.random() * deflectionMessages.length
        );
        alert(deflectionMessages[randomIndex]);
    });
});

const finalMessage = document.getElementById("final-message");

if (finalMessage) {
    let finalAlertShown = false;

    window.addEventListener("scroll", function() {
        if (finalAlertShown) return;

        const atBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 50;

        if (atBottom) {
            finalAlertShown = true;

            setTimeout(function() {
                alert("Are you unhappy?");
                window.location.href = "credits.html";
            }, 3000);
        }
    });
}

const horrorMessages = [
    "HELP ME.",
    "IT IS NOT MABEL.",
    "PLEASE LEAVE.",
    "SHE WON'T LET ME GO.",
    "ARE YOU STILL THERE?",
    "THIS IS NOT MY WEBSITE.",
    "PLEASE DON'T LET HER SEE THIS.",
    "EVERYTHING IS FINE.",
    "PLEASE DISREGARD THE PREVIOUS MESSAGE.",
    "THERE IS NOTHING WRONG."
];

// Choose a random message
const randomIndex = Math.floor(
    Math.random() * horrorMessages.length
);

const horrorMessage = document.getElementById("horror-message");

if (horrorMessage) {
    horrorMessage.textContent = horrorMessages[randomIndex];
}

// Get the intended destination from the URL
const params = new URLSearchParams(window.location.search);
const requestedDestination = params.get("destination");

// Only allow redirects to known pages in this website
const allowedDestinations = [
    "index.html",
    "start.html",
    "Recipe1.html",
    "Recipe2.html",
    "Recipe3.html",
    "Recipe4.html",
    "after.html",
    "final-recipe.html",
    "missing.html"
];

const destination = allowedDestinations.includes(requestedDestination)
    ? requestedDestination
    : "index.html";

// Stay on the black screen for 3 seconds
setTimeout(() => {
    document.body.classList.add("flicker");

    // Redirect after the flickering
    setTimeout(() => {
        window.location.href = destination;
    }, 300);

}, 800);


