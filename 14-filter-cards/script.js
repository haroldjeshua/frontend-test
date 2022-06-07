let filters = document.querySelectorAll(".nav-link");
let projects = document.querySelectorAll(".project");

for (var link of filters) {
	link.addEventListener("click", filterProjects);
}

function filterProjects(e) {
	e.preventDefault();

	for (let eachFilter of filters) {
		eachFilter.classList.remove("active");
	}

  	let filter = this.dataset.filter;
	for (var project of projects) {
		if (filter == "all") {
			project.style.display = "initial";
			this.classList.add("active");
		} else if (project.classList.contains(filter)) {
			project.style.display = "initial";
			this.classList.add("active");
		} else {
			project.style.display = "none";
		}
	}
}
