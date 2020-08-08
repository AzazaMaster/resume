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


let share = () => {
    console.log('shared');
    navigator.share({
        title: "Matvey",
        text: 'Hello World',
        url: "www.matvey.pw"
    })
}