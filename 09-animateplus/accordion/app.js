import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

const accordion = {
  element: document.getElementById("accordion"),
  translate: 0,
};

const buttons = Array.from(
  accordion.element.getElementsByTagName("button"),
  (element) => ({
	element,
	translate: 0,
  })
);

const timing = {
  easing: "out-quartic",
  duration: 400,
};

const clear = (element) =>
  Object.values(element.attributes).forEach(({ name }) =>
	element.removeAttribute(name)
  );

const hide = async (collapsing) => {
  const objects = buttons.filter(({ translate }) => translate);
  const direction = "reverse";
  rotate(collapsing.previousElementSibling, direction);
  slide(objects);
  await fold(collapsing, direction);
  clear(collapsing);
};

const show = (expanding) => {
  const button = expanding.previousElementSibling;
  const index = buttons.findIndex(({ element }) => element == button);
  const objects = buttons.slice(index + 1);
  const { height } = expanding.getBoundingClientRect();
  expanding.className = "open";
  rotate(button);
  slide(objects, height);
  fold(expanding);
};

const slide = (array, to = 0) => {
  center(to);
  animate({
	...timing,
	elements: array.map(({ element }) => element),
	transform(index) {
	  const object = array[index];
	  const from = object.translate;
	  object.translate = to;
	  return [`translateY(${from}px)`, to];
	},
  });
};

const center = (height) => {
  const from = accordion.translate;
  const to = Math.round(-height / 2);
  accordion.translate = to;
  animate({
	...timing,
	elements: accordion.element,
	transform: [`translateY(${from}px)`, to],
  });
};

const fold = async (content, direction = "normal") =>
  await animate({
	...timing,
	direction,
	elements: content,
	opacity: [0, 1],
	transform: ["scaleY(0)", 1],
  });

const rotate = ({ lastElementChild: elements }, direction = "normal") =>
  animate({
	elements,
	direction,
	easing: "out-cubic",
	duration: 600,
	transform: ["rotate(0turn)", 0.5],
  });

const toggle = async ({ target }) => {
  const collapsing = accordion.element.querySelector(".open");
  const expanding = target.nextElementSibling;
  if (collapsing) await hide(collapsing);
  if (collapsing != expanding) show(expanding);
};

buttons.forEach(({ element }) => element.addEventListener("click", toggle));
