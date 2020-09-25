function getpilihanComputer(){
	//menangkap pilihan dari komputer
	//membangkitkan bilangan random
	const comp = Math.random(); //memanggil fungsi random atau angka acak

	if(comp < 0.34) return 'gajah';
	if (comp >= 0.34 && comp < 0.67) return 'orang';
	return 'semut';
}

//untuk rulesnya
function getHasil(comp, player){
	var hasil ='';

	if(player == comp) return 'Seri';
	if (player == 'gajah') return (comp == 'orang') ? 'Menang' : 'Kalah';
	if (player == 'orang') return ( comp == 'gajah') ? 'Kalah' : 'Menang';
	if (player == 'semut') return (comp == 'orang') ? 'Kalah' : 'Menang';
}

//memutar pilihan komputer
function putar(){
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime(); //untuk mendapatkan waktu saat itu
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/'+ gambar[i++] +'.png');
		if(i == gambar.length) i = 0;
	}, 100);
}




//buat event
//pakai pengulang
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilihanComputer = getpilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);

		putar();

		//timing function
		setTimeout(function() {
			const imgComputer = document.querySelector('.img-computer');
			imgComputer.setAttribute('src', 'img/'+ pilihanComputer + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);
	});
});



// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
// 	const pilihanComputer = getpilihanComputer();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
	
// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/'+ pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });