
var body = $('body');
var backgrounds = ["url('Kids-1.jpg')","url('Kids-2.jpg')"];
var i = 0;
setInterval(function() {
      body.css('background',backgrounds[i]);
      i = i + 1;
      if (i === backgrounds.length) {
        i =  0;
      }
}, 5000);




// $('#btn2').click(function(){
// 	$('#about').append('<li>Hello</li');
// })


  

