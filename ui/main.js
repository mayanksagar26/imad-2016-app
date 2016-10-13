console.log('Loaded!');

//Change the text of the inner Html file by adding a id
var element = document.getElementById('main-text');

//Calling the inner HTML of the html file and changing rhe content
element.innerHTML = 'Click on the dinasour to see it moving';

//Move the Image of the Dinasour
 
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
   var interval = setInterval(moveRight, 50);
   alert("Bye Bye see u again when u will reload this page");
};