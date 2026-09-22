async function includePartials() {
	const includeNodes = document.querySelectorAll("[data-include]");
	const tasks = Array.from(includeNodes).map(async (node) => {
		const includePath = node.getAttribute("data-include");
		if (!includePath) {
			return;
		}

		const includeUrl = new URL(includePath, window.location.href);
		try {
			const response = await fetch(includeUrl);
			if (!response.ok) {
				throw new Error(`HTTP ${response.status}`);
			}

			node.innerHTML = await response.text();
		} catch (error) {
			console.error(`No se pudo cargar ${includePath}`, error);
		}
	});

	await Promise.all(tasks);
}

function setActiveNavLink() {
	const currentPage = document.body.dataset.page;
	if (!currentPage) {
		return;
	}

	const activeLink = document.querySelector(`[data-nav="${currentPage}"]`);
	if (activeLink) {
		activeLink.classList.add("active");
		activeLink.setAttribute("aria-current", "page");
	}
}

function setGitHubPagesBasePath() {
	const currentPath = window.location.pathname;
	const htmlDirectory = currentPath.indexOf("/html/");
	const siteRoot = htmlDirectory >= 0
		? currentPath.slice(0, htmlDirectory + 1)
		: currentPath.slice(0, currentPath.lastIndexOf("/") + 1);

	document.querySelectorAll('a[href^="/"]').forEach((link) => {
		const path = link.getAttribute("href");
		link.setAttribute("href", `${siteRoot}${path.slice(1)}`);
	});
}

document.addEventListener("DOMContentLoaded", async () => {
	await includePartials();
	setGitHubPagesBasePath();
	setActiveNavLink();
});
