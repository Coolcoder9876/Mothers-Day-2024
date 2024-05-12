function openUp() {
	const opencover = document.querySelector('#cover');
	opencover.classList.add('animate');
  setTimeout(hideCover, 1140);
}

function hideCover(){
  document.getElementById("cover").style.visibility = "hidden"
}