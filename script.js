function viewDemo(link){
	const demo = document.getElementById('demo');
	demo.setAttribute('src', link);
	demo.style.display = "flex";
	console.log(link);
	window.onclick = function(event) {
		console.log(event.target);
        if (event.target.getAttribute('class') != "project" && event.target.getAttribute('class') != "project-img" && event.target.getAttribute('class') != "tools") {
	        demo.style.display = "none";

        }
    } 
}
