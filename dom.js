var itemList= document.querySelector('#items');
console.log(itemList.parentElement);

console.log(itemList.lastElementChild);

console.log(itemList.lastChild);

var newLi= document.createElement('li');

var newLiText=document.createTextNode('item 5');
newLi.appendChild(newLiText);
var container= document.querySelector('.list-group');
console.log(container);
var li= document.querySelector('div li');
console.log(li);
 container.insertBefore(newLi,li);

 console.log(itemList.firstElementChild);
 console.log(itemList.firstChild);
 console.log(itemList.nextSibling);
 console.log(itemList.nextElementSibling);

 console.log(itemList.previousElementSibling);
 console.log(itemList.previousSibling);

 newLi.setAttribute('title','newLiItem');

 var x= document.getElementById('header-title');
 console.log(x);

 x.textContent='hello Item Lister';

 var y = document.querySelector('.list-group-item');
 console.log(y);
 y.textContent='hello Item 1';
