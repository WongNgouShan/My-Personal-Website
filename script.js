//Name : Wong Ngou Shan ID : 1155141835

const menuoffset = 33;

function toggle_scroll_bar(){
  let x = document.getElementById('bar');
  let a = document.getElementById("sep2");
  	if(a.style.height == '0px'){
		x.style.height = '1rem';
		a.style.height = "10px";}
	else{
		x.style.height = '0px';
		a.style.height = "0px";}
}

function page_startup(){
  fetch('file.txt').then(response => {
    if (response.ok) {
      return response.text();
    } 
    else {
      throw new Error('File does not exist');
    }
  })
  .then(txt => document.querySelector("#comments").innerHTML = txt)
  .catch((error) => console.log(error));
}

function processform(){
let x = document.querySelector("#new-email");
let y = document.querySelector("#new-comment");
if(!x.validity.valid || y.value === "" || x.value === ""){
if(!x.validity.valid || x.value === "") x.classList.add("is-invalid");
else x.classList.remove("is-invalid");
if(y.value === "") y.classList.add("is-invalid");
else y.classList.remove("is-invalid");
return;
}
x.classList.remove("is-invalid");
y.classList.remove("is-invalid");

let newComment = document.createElement("div");
let element = '<div>\n\t<svg height="100" width="100">\n\t\t<circle cx="50" cy="50" r="40">\n\t</svg>\n</div>\n<div>\n\t<h5></h5>\n\t<p></p>\n</div>\n';
newComment.innerHTML = element;

newComment.className = "d-flex";
newComment.querySelectorAll("div")[0].className = "flex-shrink-0"; // 1st div
newComment.querySelectorAll("div")[1].className = "flex-grow-1 ms-3"; // 2nd div

let lastComment = document.querySelector("#comments").lastElementChild; // instead of lastChild for div element

let newid = 'c' + (Number(lastComment.id.substr(1)) + 1);
newComment.id = newid;

newComment.querySelector("h5").innerHTML = document.querySelector("#new-email").value;
newComment.querySelector("p").innerHTML = document.querySelector("#new-comment").value;

let color = document.querySelectorAll("input[name=new-color]:checked")[0].value;

newComment.querySelector("circle").setAttribute("fill", color);

document.querySelector("#comments").appendChild(newComment);

fetch('file.txt', {method: 'PUT',body: document.querySelector("#comments").innerHTML});

document.querySelector("form").reset();
}

function new_hobbies(){
let hobbies = prompt("Make me like something:");
if(!(hobbies==="")){
const x = document.createElement("div");
x.innerHTML = hobbies;
x.classList.add("hobbiesitem");
x.classList.add("col-auto");
x.classList.add("py-1");
x.classList.add("px-2");
document.getElementById("hobbies").appendChild(x);}
}

function align(){
let array = document.getElementsByTagName("h1");
for (i = 0; i < array.length; i++) {
  let x = array[i].style.textAlign;
  if(x == "right")
  array[i].style.textAlign = "left";
  else if(x == "center")
  array[i].style.textAlign = "right";
  else
  array[i].style.textAlign = "center";
}
array = document.getElementsByTagName("h2");
for (i = 0; i < array.length; i++) {
  let x = array[i].style.textAlign;
  if(x == "right")
  array[i].style.textAlign = "left";
  else if(x == "center")
  array[i].style.textAlign = "right";
  else
  array[i].style.textAlign = "center";
}
}

function click_special(){
  let x = document.getElementById('special_hidden');
  let intViewportWidth = window.innerWidth;
  let a = document.getElementById("sep1");
  	if(x.style.height == '0px'){
		x.style.height = ((intViewportWidth < 576) ? '90px' : '35px');
		a.style.height = "10px";}
	else{
		x.style.height = '0px';
		a.style.height = "0px";}
}

function topleftisInViewport(el, offset) {
    const rect = el.getBoundingClientRect();
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top >= 0 + offset &&
        rect.left >= 0
    );
}

function scrollto(elementid){
var element = document.getElementById(elementid);
element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

window.addEventListener('resize', function(){
	let x = document.getElementById('special_hidden');
	let intViewportWidth = window.innerWidth;
	if(x.style.height != '0px')
		x.style.height = ((intViewportWidth < 576) ? '90px' : '35px');
	});

document.addEventListener('scroll', function () {

  bannerscroll = document.getElementById('content').getBoundingClientRect().top/(window.innerHeight*0.44);
  document.getElementById('banner-background').style.objectPosition = '50% ' + (40+(1-bannerscroll)*20) + '%';
  document.getElementById('it1').style.top = (bannerscroll)*25-25 + '%';
  document.getElementById('itt1').style.top = (bannerscroll)*25+32 + '%';

let array = document.getElementsByClassName("progress-bar");
let k = window.scrollY / (document.body.clientHeight - window.innerHeight) *100;
array[0].style.width = k + '%';
array[0].ariaValuenow = toString(k);

}, {passive: true});


function hoversvg(x){
x.getElementsByClassName("smallpic")[0].style.width = "110%";
x.getElementsByClassName("smallpic")[0].style.height = "110%";
}

function hoveroffsvg(x){
x.getElementsByClassName("smallpic")[0].style.width = "100%";
x.getElementsByClassName("smallpic")[0].style.height = "100%";
}