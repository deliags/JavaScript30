function playSound (e) {
  
  //grabs the audio tag with the pressed keyCode
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
  
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  console.log(key)
  //users presses unrecognised key
  if (!audio) return; 
  
  key.classList.add('playing')
  audio.currentTime = 0;
  audio.play();
};


window.addEventListener('keydown', playSound); 




  

