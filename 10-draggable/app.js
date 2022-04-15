const sortable = new Draggable.Sortable(document.querySelector(".drag-list"), {
  draggable: ".drag-list__item",
  mirror: {
	constrainDimensions: true,
  },
//   plugins: [Plugins.SortAnimation],
//   swapAnimation: {
// 	duration: 200,
// 	easingFunction: 'ease-in-out',
//   },
});

sortable.on('sortable:start', () => {
	console.log('sortable:start')
})
sortable.on('sortable:sort', () => {
	console.log('sortable:sort')
})
sortable.on('sortable:sorted', () => {
	console.log('sortable:sorted')
})
sortable.on('sortable:stop', () => {
	console.log('sortable:stop')
})

const colors = ["red", "blue", "yellow", "green", "orange", "pink"];
const listItems = document.querySelectorAll(".drag-list__item");
for (let i = 0; i < listItems.length; i++) {
	const randomColor = colors[Math.floor(Math.random() * colors.length)]
	listItems[i].style.backgroundColor = randomColor
}
