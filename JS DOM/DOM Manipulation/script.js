//DOM Manipulation

//Memanipulasi element

//element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Juwono</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Hello World!</p></div>';


//element.style.properties
// const judul = document.querySelector('#judul');
// judul.style.color = 'green';


//memanipulasi attribute:
//element.getAttribute() = untuk mengambil attribute
//element.setAttribute() = untuk memberikan attribute baru
//element.removeAttribute() = untuk menghapus attribute
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'juwono');

// const a = document.querySelector('section#a a');
// a.setAttribute('id','link');



//element.classList = untuk memanipulasi class
//element.classList.add()
//element.classList.remove()
//element.classList.toggle() 
//element.classList.item() = melihat letak class
//element.classList.contains() = mengecek classnya ada atau tidak
//element.classList.replace() = untuk mengganti nama class
// const p2 = document.querySelector(".p2");
// p2.classList.add('label');
// p2.classList.add('dua');
// p2.classList.replace('dua', 'satu');





//Memanipulasi Node
//buat element baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf Baru');

//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);

//simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);






const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiBaru);

//mengambil parentnya dahulu
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

//simpan element
ul.insertBefore(liBaru, li2);

//menghapus element
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);






//merubah element parent
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

//membuat element baru
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul baru');

h2Baru.appendChild(teksH2Baru);

//melakukan replace parent/child
sectionB.replaceChild(h2Baru, p4);




//menandai element baru yang di buat
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';