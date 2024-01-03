
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.querySelector('.app'),
  shaderPoints: 3,
  curvePoints: 10,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025,
})

function displayy(){
	let btn = document.getElementById('sec1_btn');
	let imgg = document.getElementById('sec1_img');
	imgg.style.display  = 'block';
}



let burger = document.getElementById('burger');
let navleft = document.getElementById('navleft');

burger.addEventListener('click' , burger_open);

function burger_open(){
	if(navleft.style.display == 'flex'){
		navleft.style.display = 'none';
	}
	else{
		navleft.style.display = 'flex';
	}
    
}

let sun = document.getElementById('mode1');
let moon = document.getElementById('mode2');
let bodycolor = document.getElementById('body');
let typecolor = document.getElementById('type');
let navcolor = document.querySelector('.navbar');
let navbtn = document.querySelector('.navbtn');

// function change_mode(){
// 	if(sun.style.display == 'block'){
// 		bodycolor.style.backgroundImage = 'none';
// 		navcolor.style.color = 'black';
// 		navbtn.style.color = 'black';
// 		typecolor.style.color = 'black';
// 		bodycolor.style.backgroundColor = 'white';
// 		sun.style.display = 'none'
// 		moon.style.display = 'block';
// 	}
// 	else{
// 		navcolor.style.color = 'white';
// 		navbtn.style.color = 'white';
// 		typecolor.style.color = 'white';
// 		bodycolor.style.backgroundColor = '#0e0e0e';
// 		sun.style.display = 'block'
// 		moon.style.display = 'none';
// 	}
// }

sun.addEventListener('click' , change_mode);
moon.addEventListener('click' , change_mode);


function toprojects(){
	let project = document.querySelector('.project_head');
	project.scrollIntoView();
}
function totechstack(){
	let tech = document.getElementById('sec3_2');
	tech.scrollIntoView();
}

function toprofiles(){
	let profile = document.querySelector('.profilehead');
	profile.scrollIntoView();
}

function toContact(){
	let contact = document.querySelector('.form_container');
	contact.scrollIntoView();
}