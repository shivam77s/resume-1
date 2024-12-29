document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("header");

    // Function to add/remove background color on scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            navbar.style.transition = "background-color 0.3s";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Hero text animation
    const heroText = document.querySelector(".hero-text");
    heroText.style.opacity = "0";
    heroText.style.transition = "opacity 2s";
    setTimeout(() => {
        heroText.style.opacity = "1";
    }, 500);
});
