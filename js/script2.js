var modal = document.getElementById("mymodal");
var btn = document.getElementsByClassName("post-btn")[0];
var span = document.getElementsByClassName("close")[0];
var p1 = document.getElementById("p1");
var ebody = document.getElementById("modal-body");

btn.onclick = function() {
	modal.style.display = "block";
	
	var copy = p1.cloneNode(true);	
	ebody.appendChild(copy);
	
	var epic = createElement("p");
	epic.textContent = "Hi!";
	ebony.appendChild(epic);		
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {		
        modal.style.display = "none";	
		ebody.innerHTML = '';		
    }
}

