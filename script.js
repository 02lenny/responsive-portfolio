function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".color_mode_button").forEach((button) => {
    button.addEventListener("click", (event) => {
        const mode = event.currentTarget.id === "enable_light_mode" ? "light" : "dark";
        document.documentElement.setAttribute("data-color-mode", mode);
        localStorage.setItem("data-color-mode", mode);
    });
});

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedMode = localStorage.getItem("data-color-mode");

if (savedMode) {
    document.documentElement.setAttribute("data-color-mode", savedMode);
} else {
    document.documentElement.setAttribute("data-color-mode", prefersDark ? "dark" : "light");
}
