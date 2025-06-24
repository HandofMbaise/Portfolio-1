const skills = document.getElementsByClassName('skills');
const node = document.getElementById('node');
const express = document.getElementById('express')
const mongo = document.getElementById('mongo')
const react = document.getElementById('react')



setTimeout(() =>{
  skills[0].textContent = 'MONGO';
  skills[0].style.color = 'lime'
}, 3000);

setTimeout(() =>{
 skills[1].textContent = 'EXPRESS';
 skills[1].style.color = 'blue'
}, 5000);

setTimeout(() =>{
   skills[2].textContent = 'REACT'; 
   skills[2].style.color = 'red'
}, 7000);

setTimeout(() =>{
   skills[3].textContent = 'NODE.JS';
   skills[3].style.color = 'yellow'
}, 9000);




