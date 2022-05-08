function mangaDragonBall(){

	//window.location.href="https://inmanga.com/ver/manga/Dragon-Ball-Super/8605de4e-e860-4f02-b5ff-154ed08fe6ef";
	window.open('https://inmanga.com/ver/manga/Dragon-Ball-Super/8605de4e-e860-4f02-b5ff-154ed08fe6ef', '_blank');
}

function mangaBlackClover(){

	window.open('https://inmanga.com/ver/manga/Black-Clover/e7f9297e-377a-4c23-b396-ae88600251b1', '_blank');
}

function mangaJujutsuKaisen(){

	window.open('https://jujutsukaisen.manganyaa.com/leer-online-gratis-espanol', '_blank');
	
}
function mangaNaruto(){

	window.open('https://inmanga.com/ver/manga/Naruto/c852cbc5-bb35-40e6-80a3-97873de57d79', '_blank');
}
function mangaOnePiece(){

	window.open('https://one-piece-fans.com/manga/es/rioponeglyph-scan.php?id=1048', '_blank');
	
}
window.onload=function(){


	var boton= document.getElementById("dragonBall");
	var boton2= document.getElementById("blackClover");
	var boton3= document.getElementById("jujutsuKaisen");
	var boton4= document.getElementById("Naruto");
	var boton5= document.getElementById("onePiece")
	boton.addEventListener("click",mangaDragonBall,false);
	boton2.addEventListener("click",mangaBlackClover,false);
	boton3.addEventListener("click",mangaJujutsuKaisen,false);
	boton4.addEventListener("click",mangaNaruto,false);
	boton5.addEventListener("click",mangaOnePiece,false);


}


