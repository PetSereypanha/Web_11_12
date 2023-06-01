// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.URL)
// console.log(document.doctype)
// console.log(document.forms.className)

// let head = document.getElementsByTagName('head');
// console.log(head);

// By ClassName

// let he = document.getElementsByClassName('headers');
// console.log(he);
// he = Array.from(he)

// he.forEach((item,index) => {
//         console.log(item.className);
//         item.style.color = "#fff";
//         item.style.background = '#030303'
//         item.style.padding = '20px';
// });

// By ID

// let header = document.getElementById('header');
// console.log(header)
// console.log(header.classList)

// header.style.color = "#e54"
// header.style.background = "#949"
// header.style.padding = '20px'

// header.innerText = "WellCome Form"


/* By Query */

// let header = document.querySelector('.headers');

// console.log(header)
// console.log(header.classList)

// header.style.color = "#e54"
// header.style.background = "#949"
// header.style.padding = '20px'

// =======================================

// let tbody = document.querySelector('tbody');

// console.log(tbody)
// console.log(tbody.childElementCount)
// console.log(tbody.children[1])

// tbody.children[1].children[0].innerHTML = "Sumsung"

/* Add Row */

const tr = document.createElement('tr');
const th = document.createElement('th');
const td = document.createElement('td');
const span = document.createElement('span');

th.className = 'new item px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white';
th.innerHTML = 'Oppo find X';
th.id = 'item-id'
th.setAttribute('title','post-title');
td.className = 'px-6 py-4';
span.className = 'fa-solid fa-circle-xmark';

// console.log(th);
// console.log(td);
// console.log(span);
td.append(span);
// console.log(td);
tr.append(th,td);
tr.className = 'bg-white dark:bg-gray-800'
// console.log(tr);

document.querySelector('tbody').append(tr);

const clear = document.querySelector('.btnclear');

clear.addEventListener('click',function(even){
    console.log(even)
    console.log(event.clientX);  // width
    console.log(event.clientY);  // height
    console.log(event.offsetX);  // return coordinate x on mouse event
    console.log(event.offsetY);  // coordinate y
    console.log(event.altKey);
    console.log(event.shiftKey);
    console.log(event.ctrlKey);
    console.log(event.type);  // event mouse
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.innerText);
    
    event.target.style.backgroundColor = '#4545'
})