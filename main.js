$(function(){

 var img = $('.container');
 var backgrounds = [$('#img1') ,$('#img2')];
 var i = 0;
 setInterval(function() {
      img.css('background',backgrounds[i]);
      i = i + 1;
      if (i === backgrounds.length) {
        i =  0;
      }
 }, 5000);

})







  

