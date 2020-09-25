//DOM Selection
//Ada beberapa method :

//document.getElementById() -> mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Juwono';


// //document.getelementsByTagName() -> mengembalikan HTMLCollection
// const p = document.getElementsByTagName('p');
// for (let i=0; i < p.length; i++){
// 	p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0]; //agar menjadi element
// h1.style.fontSize = '50px';

// //document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini diubah dari javascript';

//document.querySelector() -> mengembalikan element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';


//document.querySelectorAll() -> nodelist
// const p = document.querySelectorAll('p');
// p[2].style.backgroundColor = 'lightblue';




//mengubah node root
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p'); //mengubah scop dari node root
p4.style.backgroundColor = 'orange';

