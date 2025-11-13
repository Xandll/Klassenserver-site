document.addEventListener("DOMContentLoaded", () => {
    const ipButton = document.querySelector("[data-ip]");
    const statusMessage = document.querySelector("[data-status]");

    if (!ipButton || !statusMessage) {
        return;
    }

    const originalText = statusMessage.textContent || "";

    ipButton.addEventListener("click", async () => {
        const ip = ipButton.getAttribute("data-ip");
        if (!ip) {
            return;
        }

        try {
            await navigator.clipboard.writeText(ip);
            statusMessage.textContent = "IP kopiert! Wir sehen uns ingame.";
        } catch (error) {
            statusMessage.textContent = "Kopieren fehlgeschlagen, bitte selber markieren.";
        }

        window.setTimeout(() => {
            statusMessage.textContent = originalText;
        }, 4000);
    });
});

