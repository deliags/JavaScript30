function playSound (e) {
  
  //grabs the audio tag with the pressed keyCode
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
  
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  //users presses unrecognised key
  if (!audio) return; 
  
  key.classList.add('playing')

  //rewind to the start
  audio.currentTime = 0;
  audio.play();
};

function removeTransition (e) {
  if (e.propertyName !== 'transform') return; //ignores all properties that are not tranform
  e.target.classList.remove('playing');
}

//loops thorough the nodelist of keys to listen for the end of transition property
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); 



  

