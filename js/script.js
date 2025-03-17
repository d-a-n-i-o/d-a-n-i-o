// Back-to-Top Button Functionality (Source: W3Schools - How To Create a Scroll Back To Top Button)
// URL: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {  // Only runs if the button exists on the  html and css
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});