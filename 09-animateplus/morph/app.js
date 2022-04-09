import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

const polygon = document.body.firstElementChild;

const paths = {
    square: getComputedStyle(polygon).getPropertyValue("clip-path"),
    star: "50 0, 62 36, 100 36, 69 58, 81 95, 50 72, 19 95, 31 58, 0 36, 38 36"
}

animate({
    elements: polygon,
    duration: 1500,
    easing: "in-out-quintic",
    loop: true,
    direction: "alternate",
    clipPath: Object.values(paths)
})