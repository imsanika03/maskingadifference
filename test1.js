var images = [];
    images[0] = "../img/masks_stacked.jpeg";
    images[1] = "../img/01.jpg";
    images[2] = "../img/02.jpg";
  
  var imageHead = document.getElementById("img");
  var i = 0;
  
  setInterval(function() {
        imageHead.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
            i =  0;
        }
  }, 1000);