  'use strick'

  ////////////////////////busmall project/////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////js color css////////////////////////////
  var input = document.querySelector('input');
  var div = document.querySelector('div');

  input.addEventListener('change', function(){
    div.style.setProperty('--div-color', input.value);
  })
  ///////////////////busmall Constructor//////////////////////////
  var totalclick = [];
  var firstImg = document.getElementById("firstpic");
  var renderProdImg1 = null;  /////////this is a place holder for the string of the src img///////
  var secondImg = document.getElementById("secondpic");
  var renderProdImg2 = null;////////same as above////////
  var thirdImg = document.getElementById("thirdpic");
  var renderProdImg3 = null;////////same as above////////
  var allBusmallProducts = [];

/////////////Bus Mall Constructor///////////////////
  function BusmallProducts (name, imagePath){
    this.name = name;
    this.image = imagePath;
    this.imageSelected = [];
    this.clickedImage = [];
    this.timesClicked = 0;
    this.timesRendered = 0;
    allBusmallProducts.push(this);

  }
  console.log (allBusmallProducts);

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

  //  function productOfBusmall(){

  //   new BusmallProducts('Bathroom', './img/boots.jpg');
  //   for(i = 0; 1< )
  //   ////////new BusmallProducts ({'Bag', './img/bag.jpg'},) 

  //  }
   

  //  firstImg.src = allBusmallProducts[0].image;
  //  firstImg.alt = allBusmallProducts[0].name;
  //  seconImg.src = allBusmallProducts[1].image;
  //  seconImg.alt = allBusmallProducts[1].name;
  //  thirdImg.src = allBusmallProducts[2].image;
  //  thirdImg.alt = allBusmallProducts[2].name;

   
   
//////////////////function for my random picture generator////
////////using the random number generator/////////////////
   function getRandomImgs (){
     var randomIndex = Math.floor(Math.random() * allBusmallProducts.length);

     ////////loops through the array of stored products/////////////
     while (
      renderProdImg1 === allBusmallProducts[randomIndex].name ||
       renderProdImg2 === allBusmallProducts[randomIndex].name ||
       renderProdImg3 === allBusmallProducts[randomIndex].name
     ){
      randomIndex = Math.floor(Math.random() * allBusmallProducts.length)
     }
     return randomIndex;
   }

  ///////produces the random pictures using the getRandomImgs Math function////////
   var prodImgIndex1 = getRandomImgs();
   renderProdImg1 = allBusmallProducts[prodImgIndex1].name;
   renderProdImg1 = allBusmallProducts[prodImgIndex1].image;
   
   var prodImgIndex2 = getRandomImgs();
   renderProdImg2 = allBusmallProducts[prodImgIndex2].name;

   var prodImgIndex3 = getRandomImgs();
   renderProdImg3 = allBusmallProducts[prodImgIndex3].name;
///////////////////////line above produces the random pictures/////////////

////////// this line attaches the tag src found here and delivers it to html/////
   firstImg.setAttribute('src', allBusmallProducts[prodImgIndex1].image);
///////// this line attaches the alt tag found here and delivers it to html///////
   firstImg.setAttribute = ('alt', allBusmallProducts[prodImgIndex1].name);
   allBusmallProducts[prodImgIndex1].timesRendered++;/////increments by one///

   secondImg.setAttribute('src', allBusmallProducts[prodImgIndex2].image);
   secondImg.setAttribute('alt', allBusmallProducts[prodImgIndex2].name);
   allBusmallProducts[prodImgIndex2].timesRendered++;

   thirdImg.setAttribute('src', allBusmallProducts[prodImgIndex3].image);
   thirdImg.setAttribute('alt', allBusmallProducts[prodImgIndex3].name);
   allBusmallProducts[prodImgIndex3].timesRendered++;
   





 


  /////var proImg1 =  

  //firstpic.setAttribute('src',allBusmallProducts[])