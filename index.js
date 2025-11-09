const typingTextElement = document.querySelectorAll(".typing-text");
const textToType = ["Web Developer", "Mern Stack Developer"];

const typeSpeed = 100;
const eraseSpeed = 50;
const delayBetween = 1500;

typingTextElement.forEach((element, index) => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typewriter() {
        const currentText = textToType[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typewriter, typeSpeed);
        } else if (isDeleting && charIndex > 0) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typewriter, eraseSpeed);
        } else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(typewriter, delayBetween);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % textToType.length;
                setTimeout(typewriter, typeSpeed);
            }
        }
    }

    setTimeout(typewriter, 0);
});


// Copy to clipboard onClick
document.querySelectorAll(".js-copy").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault(); // prevent navigation
        const textToCopy = event.target.textContent.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert(`Copied to clipboard: ${textToCopy}`);
        });
    });
});
