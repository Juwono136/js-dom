//event handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
// 	card.style.display = 'none';
// });


//DOM Traversal
const close = document.querySelectorAll('.close');

//looping
//cara 1
// for(let i = 0; i < close.length; i++){
// 	close[i].addEventListener('click', function(e){
// 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	});
// };

//cara 2
// close.forEach(function(el){
// 	el.addEventListener('click', function(e){
// 		e.target.parentElement.style.display = 'none';
// 	});
// });

//tipe dari DOM Traversal : 
//parentNode
//parentElement
//nextSibling
//nextElementSibling
//previousElementSibling
//previousSibling

//prevent default
// close.forEach(function(el){
// 	el.addEventListener('click', function(e){
// 		e.target.parentElement.style.display = 'none';
// 		e.preventDefault(); //method untuk menghentikan aksi default-nya
// 		e.stopPropagation(); //method untuk menghentikan event bubbling (class card)
// 	});
// });


// //Event Bubbling
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
// 	card.addEventListener('click', function(e){
// 		alert('ok');
// 	});
// });


//cara lebih efektif
const container = document.querySelector('.container');
container.addEventListener('click', function(e){
	if(e.target.className = 'close'){
		e.target.parentElement.style.display = 'none';
		e.preventDefault();//untuk jaga2 kalau yang di klik nanti berupa link
	}
});
