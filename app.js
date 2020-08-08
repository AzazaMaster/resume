console.log("script connected")
navigator.share("1");

let full = document.getElementById("show");
full.addEventListener('click', (e) => {
    e.preventDefault();
    if (full.textContent === "Hide ↥") {
        full.textContent = "View full ↧";
    } else {
        full.textContent = "Hide ↥";
    }
})

