function setup() {
    const button = document.querySelector("#musicplayer button");
    button.addEventListener("click", (e) => {
        console.log(e)
        // If not pressed before
        if (button.getAttribute("aria-pressed") === "false") {

        }
    });
}

setup();