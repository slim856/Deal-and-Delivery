  //Categories DropDown
  function Categories() {
    document.getElementById("myDrpdwn").classList.toggle("open");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.categories-drpdwn-btn')) {
      var dropdowns = document.getElementsByClassName("categoriesDrpdwn-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('open')) {
          openDropdown.classList.remove('open');
        }
      }
    }
  }

  //Company DropDown
  function Company() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.company-drpdwn-btn')) {
      var dropdowns = document.getElementsByClassName("companyDropdown-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  var drpdwn = document.getElementById("logIn-drp");
  var drpBtn = document.getElementById("logIn-drp-btn");
  var drpClose = document.getElementById("close");
  drpBtn.onclick = function() {
    drpdwn.style.display = "block";
  }
  drpClose.onclick = function() {
    drpdwn.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == drpdwn) {
      drpdwn.style.display = "block";
    }
  }
  
//Sign Up Dropdown
var dropdwn = document.getElementById("signUp-drp");
var dropBtn = document.getElementById("signUp-drp-btn");
var dropClose = document.getElementById("close-btn");
dropBtn.onclick = function() {
  dropdwn.style.display = "block";
}
dropClose.onclick = function() {
  dropdwn.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == drpdwn) {
    dropdwn.style.display = "block";
  }
}


//Carousel
var slider_img = document.querySelector('.carousel-img');
var images = [];
var i = 0;
var time = 3000;

images[0] = "furniture 3.png"
images[1] = "electronics 2.png"

function changeImg(){
  slider_img.setAttribute('src', "img/"+images[i]);
  if(i < images.length - 1){
    i++; 
  } else { 
    i = 0;
  }
  setTimeout("changeImg()", time);
}

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
 	return slider_img.setAttribute('src', "img/"+images[i]);
 }

window.onload=changeImg;