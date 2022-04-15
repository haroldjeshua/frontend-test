const sortable = new Draggable.Sortable(document.querySelector(".drag-list"), {
  draggable: ".drag-list__item",
});

const colors = ["red", "blue", "yellow", "green", "orange", "pink"];
const listItems = document.querySelectorAll(".drag-list__item");
for (let i = 0; i < listItems.length; i++) {
	const randomColor = colors[Math.floor(Math.random() * colors.length)]
	listItems[i].style.backgroundColor = colors[i];
}
