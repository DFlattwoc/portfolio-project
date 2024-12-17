function openModal(imgSrc) {
	var modal = document.getElementById("myModal");
	console.log('hello');

	var img = document.getElementById("myImg");
	var modalImg = document.getElementById("img01");
		
	modal.style.display = "block";
	modalImg.src = imgSrc;
}