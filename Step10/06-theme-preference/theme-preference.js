function applyTheme(theme) {
    if (theme === "dark") {
        document.body.style.backgroundColor = "#00215E";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#00215E";
    }
}

function saveTheme(theme) {
    localStorage.setItem("misard.theme", theme);
    applyTheme(theme);

    console.log("Saved Theme:", theme);
}

// Restore the saved preference when the page loads.
let savedTheme = localStorage.getItem("misard.theme") || "light";
applyTheme(savedTheme);

document.getElementById("lightButton").addEventListener("click", () => {
    saveTheme("light");
});

document.getElementById("darkButton").addEventListener("click", () => {
    saveTheme("dark");
});

// Choose a theme, then refresh the page.
// The saved preference is applied again.