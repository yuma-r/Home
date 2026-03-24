function openImage(img) {
    var e = document.getElementById("overlay");
	if(e != null)
	{
		e.style.display = "flex";
	}
	
    var s = document.getElementById("overlay-img");
	if(e != null)
	{
		s.src = img.src;
	}
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}