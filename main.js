document.getElementById("central").style.backgroundColor = "beige";
document.getElementById("central").style.borderColor = "black";
document.getElementById("central1").style.backgroundColor = "beige";
document.getElementById("central1").style.borderColor = "black";
document.getElementById("central2").style.backgroundColor = "beige";
document.getElementById("central2").style.borderColor = "black";





function openModal(imgSrc) {
	var modal = document.getElementById("myModal");
	console.log('hello');

	var img = document.getElementById("myImg");
	var modalImg = document.getElementById("img01");
		
	modal.style.display = "block";
	modalImg.src = imgSrc;
}
