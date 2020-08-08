console.log("script connected")

let full = document.getElementById("show");
full.addEventListener('click', (e) => {
    e.preventDefault();
    if (full.textContent === "Hide ↥") {
        full.textContent = "View full ↧";
    } else {
        full.textContent = "Hide ↥";
    }
})

document.addEventListener('touchstart', (e) => {
    navigator.share({
        title: document.title,
        text: 'Hello World',
        url: window.location.href
    })
})

