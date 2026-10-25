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
            }, 3000);
        }
    });
}