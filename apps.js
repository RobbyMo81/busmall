'use strict';

////////////////////////busmall project/////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////js color css////////////////////////////
var input = document.querySelector('input');
var div = document.querySelector('div');



input.addEventListener('change', function () {
  div.style.setProperty('--div-color', input.value);
})
///////////////////busmall Constructor//////////////////////////

//var guestName = prompt ('Hi there friend. What is your Name!');
 
    

var totalClick = 0;
var firstImg = document.getElementById("firstpic");
var renderProdImg1 = null;  /////////this is a place holder for the string of the src img///////
var secondImg = document.getElementById("secondpic");
var renderProdImg2 = null;////////same as above////////
var thirdImg = document.getElementById("thirdpic");
var renderProdImg3 = null;////////same as above////////
var allBusmallProducts = [];

////////line below will gets the id to make the ul list/////////////////
var statsList = document.getElementById('stats')



var allClicks = [];
var allRendered = [];
var allNames = [];


/////////////Bus Mall Constructor///////////////////
function BusmallProducts(name, imagePath) {
  this.name = name;
  this.image = imagePath;
  this.timesClicked = 0;
  this.timesRendered = 0;
  this.imageSelected = 0;
  this.clickedImage = 0;
  allBusmallProducts.push(this);

}
//console.log ('this is the timesClicked ' + allBusmallProducts.timesClicked().value);
//console.log ('this is the timesRendered ' + allBusmallProducts.timesRendered());

//////////new BusmallProducts ([['Bag', './img/bag.jpg'],['Banana','./img/banana.jpg']]);///////
new BusmallProducts('Bag', ' ./img/bag.jpg')
new BusmallProducts('Banana', './img/banana.jpg');
new BusmallProducts('Bathroom', './img/bathroom.jpg');
new BusmallProducts('Boots', './img/boots.jpg');
new BusmallProducts('Breakfast', './img/breakfast.jpg');
new BusmallProducts('Bubblegum', './img/bubblegum.jpg');
new BusmallProducts('Cthulhu', './img/cthulhu.jpg');
new BusmallProducts('Dog-duck', './img/dog-duck.jpg');
new BusmallProducts('Dragon', './img/dragon.jpg');
new BusmallProducts('Pen', './img/Pen.jpg');
new BusmallProducts('Pet-sweep', './img/pet-sweep.jpg');
new BusmallProducts('Scissors', './img/scissors.jpg');
new BusmallProducts('Shark', './img/shark.jpg');
new BusmallProducts('Sweep', './img/sweep.png');
new BusmallProducts('Tauntaun', './img/tauntaun.jpg');
new BusmallProducts('Unicorn', './img/unicorn.jpg');
new BusmallProducts('Usb', './img/usb.gif');
new BusmallProducts('Water-can', './img/water-can.jpg');
new BusmallProducts('wine-glass', './img/wine-glass.jpg');
new BusmallProducts('favicon', './img/favicon.png');




//////////////////function for my random picture generator////
////////using the random number generator/////////////////
function getRandomImgs() {
  var randomIndex = Math.round(Math.random() * allBusmallProducts.length);

  ////////loops through the array of stored products/////////////
  while (
    renderProdImg1 === allBusmallProducts[randomIndex].name ||
    renderProdImg2 === allBusmallProducts[randomIndex].name ||
    renderProdImg3 === allBusmallProducts[randomIndex].name

  ) {
    randomIndex = Math.round(Math.random() * allBusmallProducts.length)
  }
  return randomIndex;
}
console.log('this is the all ' +allBusmallProducts);


function onClick(event) {
  var imgName = event.target.getAttribute('alt');

  /////gives the user 25 clicks when totalClicks = 25 it will stop the user
  if (totalClick < 25) {
    //////increments by 1 for every click////
    totalClick++;

    ////// uses calculates which img is clicked 
    for (var i = 0; i < allBusmallProducts.length; i++) {


      if (imgName === allBusmallProducts[i].name) {
        allBusmallProducts[i].timesClicked++
        //console.log(allBusmallProducts[i]);
      }
    }
    
  }
  else {
    // alert('Thank you for the clicks ' + guestName);
    alert('Thank you for your votes')
    firstImg.removeEventListener('click', onClick);
    secondImg.removeEventListener('click', onClick);
    thirdImg.removeEventListener('click', onClick);
    

    busmallArr();
    allVotes();
    myChart();
    
    
    
  }
  render();
}////////////////end of onClick function//////////////

///////// Ron and Iris helped me with function ////////////
//////// this function gets the arr information out of BusmallProducts//////

function busmallArr() {    

  for (var i = 0; i < allBusmallProducts.length; i++) {
    allClicks[i] = allBusmallProducts[i].timesClicked;
    allRendered[i] = allBusmallProducts[i].timesRendered;
    allNames[i] = allBusmallProducts[i].name;

  }
  // allClicks.push();
  //   allRendered.push();
  //   allNames.push(); 
}
busmallArr();
///console.log(allClicks);

function allVotes(){
  var storedLocalVotes;
  var allVotes; 
  storedLocalVotes = localStorage.getItem('BusmallProducts');
   if (storedLocalVotes !== null){
     allVotes = JSON.parse(storedLocalVotes);

     for (var i = 0; i < allBusmallProducts.length; i++) {
      
       allBusmallProducts[i].timesClicked = allBusmallProducts[i].timesClicked + allVotes[i].timesClicked;
       allBusmallProducts[i].timesRendered = allBusmallProducts[i].timesRendered + allVotes[i].timesRendered;
     }

   }
 allVotes = JSON.stringify(allBusmallProducts);
 localStorage.setItem('BusmallProducts', allVotes);
}


//////////renders a new picture on user action KNOWN as click//////////////
function render() {
  ///////produces the random pictures using the getRandomImgs Math function////////
  var prodImgIndex1 = getRandomImgs();
  renderProdImg1 = allBusmallProducts[prodImgIndex1].image;
  //renderProdImg1 = allBusmallProducts[prodImgIndex1].image;

  var prodImgIndex2 = getRandomImgs();
  renderProdImg2 = allBusmallProducts[prodImgIndex2].image;

  var prodImgIndex3 = getRandomImgs();
  renderProdImg3 = allBusmallProducts[prodImgIndex3].image;
  ///////////////////////line above produces the random pictures/////////////

/////////////line below will make the ul list after all votes are completed. reference line 29 of html id/////////
  var item = document.createElement('li');
  statsList.appendChild(item);
  item.textContent = (allClicks + allNames + allRendered);

  //console.log (item.textContent);

  //////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////

// function msgToUser(){
//   var item = document.createElement('li');
//   var userDisplay = null;
  
//   for (var i =0; i = allBusmallProducts.length; i++){
//     userDisplay = '';
//     userDisplay = allNames[i] + ' had ' + allClicks[i];
//     userDisplay = userDisplay + ' votes and shown ' + allRendered[i];
//     item.textContent = userDisplay
//     statsList.appendChild(item);

//   }
// }

  

  ////////// this line attaches the tag src found here and delivers it to html/////
  firstImg.setAttribute('src', allBusmallProducts[prodImgIndex1].image);
  ///////// this line attaches the alt tag found here and delivers it to html///////
  firstImg.setAttribute('alt', allBusmallProducts[prodImgIndex1].name);
  allBusmallProducts[prodImgIndex1].timesRendered++;/////increments by one///

  secondImg.setAttribute('src', allBusmallProducts[prodImgIndex2].image);
  secondImg.setAttribute('alt', allBusmallProducts[prodImgIndex2].name);
  allBusmallProducts[prodImgIndex2].timesRendered++;

  thirdImg.setAttribute('src', allBusmallProducts[prodImgIndex3].image);
  thirdImg.setAttribute('alt', allBusmallProducts[prodImgIndex3].name);
  allBusmallProducts[prodImgIndex3].timesRendered++;

}
render();



///console.log(onClick);
firstImg.addEventListener('click', onClick);
secondImg.addEventListener('click', onClick);
thirdImg.addEventListener('click', onClick);

//////////////var firstImg = document.getElementById("firstpic");
/////////////////var renderProdImg1 = null;  /////////this is a place holder for the string of the src img///////
////////////// var secondImg = document.getElementById("secondpic");
///////////var renderProdImg2 = null;////////same as above////////
////////////var thirdImg = document.getElementById("thirdpic");
///////////var renderProdImg3 = null;////////same as above////////
/////////var allBusmallProducts = [];



var ctx = document.getElementById('myChart').getContext('2d');
function myChart() {

  ////// nested this alert in here becuase this renders at the end of the voting////////
  
    firstImg.addEventListener('click', onClick);
    secondImg.addEventListener('click', onClick);
    thirdImg.addEventListener('click', onClick);

  // //for(var j=i=0; j&&i<allBusmallProducts.length; j&&i++){     
  // //}
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: allNames,
      datasets: [{
        label: 'Times Clicked',
        data: allClicks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }, {
        label: 'Times Seen',
        data: allRendered,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}



  /////var proImg1 =  

  //firstpic.setAttribute('src',allBusmallProducts[])