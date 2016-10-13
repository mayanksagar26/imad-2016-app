console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'Click on the dinasour to see it moving';

//Move the Image of the Dinasour
 
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
};