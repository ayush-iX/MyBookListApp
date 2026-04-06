//EXAMINE THE DOCUMENT OBJECT//
// console.dir(document);
// console.log(document.domain);//local host 
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);//indirectly prints all the lines in array index format
// console.log(document.all[10]);
// //document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);
//Selectors
//1)GET ELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';//styling does not applied to the console
// headerTitle.innerText='Goodbye';//Applies styling everywhere ,even in the console
//difference between these two is one of them focuses on the styling
//console.log(headerTitle.innerText)
//headerTitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';
//Till now-innerText,textContent,innerHTML,style.borderBottom

//GETELEMENTSBYCLASSNAME//
// var items=document.getElementsByClassName('list-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';
// //Gives error
// //items.style.backgroundColor='#f4f';//
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='#f4f';
// }

//GETELEMENTSBYTAGNAME//
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f';
// }
//QUERY SELECTOR-for single element selection//
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello World';
// //with query selector we can use many css selector
// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";
// //last-child,nth-child these are css pseudo selectors

// var item=document.querySelector('.list-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-item:last-child');
// lastItem.style.color='red';

// var secondItem=document.querySelector('.list-item:nth-child(2)');
// secondItem.style.color='coral';

//QUERYSELECTORALL
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
//}

//Traversing the DOM//
 var itemList=document.querySelector('#items');
// //parentnode
// console.log(itemList.parentNode);//div is the parent of the items
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);//div is the parent of the items
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNodes property-gives a NodeList
//console.log(itemList.childNodes);//if we use childnodes along with the list items,text also comes after printing every children list item,text represents a line break or space ,so better to use children

//children property-gives an HTMLCollection,no text here 
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//First Child
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';
//1)childNodes
//2)children
//3)firstChild
//4)firstElementChild
//5)lastElementChild
//6)nextSibling
//7)nextElementSibling
//8)previousSibling
//9)previousElementSibling
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling)
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//createElement
//Create a div
var newDiv=document.createElement('div');
//Add Class
newDiv.className='hello';
//Add id
newDiv.id='hello1';
//Add attr
newDiv.setAttribute('title','Hello Div');
//Create text node
var newDivText=document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);


var container=document.querySelector('header .container');//header me se container class ko select kiya
var h1=document.querySelector('header h1');//header me se h1 tag select karo
console.log(newDiv);
newDiv.style.fontsize='30px';
container.insertBefore(newDiv,h1);//newDiv ko insert karo container ke ander lekin h1 se pehle

//Event Listeners
var button=document.getElementById('button').addEventListener('click',buttonClick);
function buttonClick(e){
    //console.log('Button Clicked');
    //console.log(e);
    console.log(e.target);//it gives the actual element that was clicked
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output=document.getElementById('output');
    output.innerHTML='<h3>'+e.target.id+'</h3>';
    console.log(e.type);//click
    console.log(e.clientX);
    console.log(e.clientY);//gives the position from X and Y axis

//client is positioning from the window /browser
//offset is from the actual element 
//console.log(e.offsetX);
//console.log(e.offsetY);
console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);//hold the shift key and then click the button you will get true otherwise false
}

var button=document.getElementById('button');
button.addEventListener('dblclick',runEvent);

var box=document.getElementById('box');
//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);

//box.addEventListener('mouseover',runEvent);
//box.addEventListener('mouseout',runEvent);
//box.addEventListener('mousemove',runEvent);
var itemInput=document.querySelector('input[type="text"]');
var form=document.querySelector('form');
//itemInput.addEventListener('keydown',runEvent);
var select=document.querySelector('select');
select.addEventListener('change',runEvent);
select.addEventListener('input',runEvent);//same like change
form.addEventListener('submit',runEvent);


function runEvent(e){
    e.preventDefault();//it will stop that from happening
    console.log('EVENT TYPE :'+e.type);
    //console.log(e.target.value);
    //document.getElementById('output').innerHTML='<h3> " +e.target.value+ " </h3>'

    // output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
   // document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";


}
//different events :click,dblclick,mouseup,mousedown,mouseenter,mouseleave,mouseover,mouseout,mousemove,keydown,keyup,keypress,focus-just click inside,blur-just click out,cut,paste,input
//mouseover-for the inner element ,mousenter-for the outer /parent element



























