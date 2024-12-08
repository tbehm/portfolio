function viewDemo(link){
	const demo = document.getElementById('demo');
	demo.setAttribute('src', link);
	demo.style.display = "flex";
	window.onclick = function(event) {
		console.log(event.target);
        if (event.target.getAttribute('class') != "project" && event.target.getAttribute('class') != "project-img" && event.target.getAttribute('class') != "tools") {
	        demo.style.display = "none";

        }
    } 
}
let clicked = false;
hamburger.addEventListener('click', e=>{
	if(clicked){
		hamburger.style.height = "1em";
		hamburger.style.background = "#060415"
		clicked = false;
	}
	else{
		hamburger.style.height = "6.5em";
		hamburger.style.background = "#181516"
		clicked = true;
	}
	
})