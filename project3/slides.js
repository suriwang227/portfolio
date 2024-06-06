let personaIndex = 1;
showPersonas(personaIndex);

function changePersona(n) {
  showPersonas(personaIndex += n);
}

function showPersonas(n) {
  let i;
  let slides = document.getElementsByClassName("persona-image");
  if (n > slides.length) {personaIndex = 1}    
  if (n < 1) {personaIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[personaIndex-1].style.display = "block";  
}

let storyboardIndex = 1;
showStoryboard(storyboardIndex);

function changeStoryboard(n) {
  showStoryboard(storyboardIndex += n);
}

function showStoryboard(n) {
  let i;
  let slides = document.getElementsByClassName("storyboard-image");
  if (n > slides.length) {storyboardIndex = 1}    
  if (n < 1) {storyboardIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[storyboardIndex-1].style.display = "block";  
}

let journeymapIndex = 1;
showJourneymap(journeymapIndex);

function changeJourneymap(n) {
  showJourneymap(journeymapIndex += n);
}

function showJourneymap(n) {
  let i;
  let slides = document.getElementsByClassName("journeymap-image");
  if (n > slides.length) {journeymapIndex = 1}    
  if (n < 1) {journeymapIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[journeymapIndex-1].style.display = "block";  
}

