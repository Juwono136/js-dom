//DOM Events

//menggunakan event Handler (inline HTML attribute) -> tidak disarankan!
const p3 = document.querySelector('.p3');

function ubahWarnaP3(){
	p3.style.backgroundColor = 'lightblue';
}


//event handler yang menggunakan method
const p2 = document.querySelector('.p2');
function ubahWarnaP2(){
	p2.style.backgroundColor = 'forestgreen';
}
p2.onclick = ubahWarnaP2;



//menggunakan method addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
	const ul = document.querySelector('section#b ul');
	const liBaru = document.createElement('li');
	const teksLiBaru = document.createTextNode('item baru');
	liBaru.appendChild(teksLiBaru);
	ul.appendChild(liBaru);
});
