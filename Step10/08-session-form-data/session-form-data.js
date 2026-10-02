let internNameInput = document.getElementById("internName");
let clearButton = document.getElementById("clearButton");

// Restore the draft after a page refresh.
internNameInput.value =
    sessionStorage.getItem("misard.internNameDraft") || "";

// Save whenever the input changes.
internNameInput.addEventListener("input", () => {
    sessionStorage.setItem(
        "misard.internNameDraft",
        internNameInput.value
    );
});

clearButton.addEventListener("click", () => {
    sessionStorage.removeItem("misard.internNameDraft");
    internNameInput.value = "";
});

// Enter a name and refresh this tab.
// The draft is restored from sessionStorage.