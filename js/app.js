const header = document.querySelector(".header");
const nav = document.querySelector('[data-id="nav"]');
const spoilerHeaders = document.querySelectorAll('[data-id="spoiler__header"]');

document.querySelector("#burger").addEventListener("click", () => {
    header.classList.add("active");
    nav.classList.add("active");
});
document.querySelector("#close").addEventListener("click", () => {
    header.classList.remove("active");
    nav.classList.remove("active");
});

nav.addEventListener("click", event => {
    event.preventDefault();
    const target = event.target;
    if(target.dataset.id === "link") {
        Array.from(nav.querySelectorAll('[data-id="link"]')).forEach(item => {
            item.parentNode.classList.remove("selected");
        });
        target.parentNode.classList.add("selected");
    } else if(target.dataset.id === "spoilerHeader") {
        Array.from(nav.querySelectorAll('[data-id="spoilerHeader"]')).forEach(item => {
            if(item !== target) item.parentNode.classList.remove("open");
        });
        target.parentNode.classList.toggle("open");
    }
});

