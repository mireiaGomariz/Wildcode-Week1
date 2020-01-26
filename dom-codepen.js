
// 1.Manipulate the body

document.body.style.backgroundImage = "url('http://www.transparenttextures.com/patterns/arabesque.png')";

//2. Find an element by its id and alter it

const textChange = document.getElementById('replace-text');

textChange.style.color = '#777';
textChange.style.fontSize = '2rem';
textChange.innerHTML = 'I can do <em>whatever</em> I want with JavaScript';


//3.Find elements by their class name and alter them
const blueText = document.getElementsByClassName('blue');

for (let i = 0; i < blueText.length; i++) {
  blueText[i].style.color = 'blue';
};

//4.Respond to a click event

const openButton = document.getElementById('open-modal');

openButton.addEventListener('click', () =>  {
document.getElementById('modal').style.display = "block";
   });


const closeButton = document.getElementById('close-modal');

closeButton.addEventListener('click', () =>  {
document.getElementById('modal').style.display = "none";
   });

//5. Respond to a change event

const changeTexture = document.getElementById('texture-background');


const changeTag = document.getElementsByTagName('select');


for (let i = 0; i < changeTag.length; i++) {
  changeTag[i].addEventListener('change', event => {

    changeTexture.style.backgroundImage =
    'url('+event.target.value+')'
    ;
  })
}
