import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

let tick;

const {body} = document;
const {content} = document.querySelector("template");
const mobile = matchMedia("(pointer: coarse)").matches;
const center = 20;
const spread = 150;
const palette = [
  "#616AFF",
  "#2DBAE7",
  "#48DC6B",
  "#DBDEEA",
  "#FC6E3F",
  "#FFBF00"
];

const random = (min, max) =>
  Math.random() * (max - min) + min;

const burst = ({clientX, clientY}) => {
  if (tick) return;
  tick = true;

  requestAnimationFrame(() => {
    tick = false;

    const x = clientX - center;
    const y = clientY - center;

    palette.forEach(async color => {
      const svg = content.cloneNode(true).firstElementChild;
      const {style} = svg;

      style.left = `${x}px`;
      style.top = `${y}px`;
      style.fill = color;

      await animate({
        elements: body.appendChild(svg),
        easing: "out-cubic",
        transform: [
          "translate(0px, 0px) scale(1)",
          `${random(-spread, spread)} ${random(-spread, spread)} 0`
        ]
      });

      body.removeChild(svg);
    });
  });
};

if (mobile)
  document.addEventListener("touchmove", ({touches}) => {
    for (const touch of touches)
      burst(touch);
  });

else
  Object.entries({
    down: "add",
    up: "remove"
  }).forEach(([event, action]) =>
    document.addEventListener(`mouse${event}`, event => {
      event.preventDefault();
      document[`${action}EventListener`]("mousemove", burst);
    }));

animate({
  elements: body.querySelector("h1"),
  delay: 1500,
  easing: "out-cubic",
  opacity: [1, 0]
}).then(({elements}) => body.removeChild(elements));

// import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";