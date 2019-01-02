function harmlessRansomNote(noteText, magazineText){
  let noteArray = noteText.split(" ")
  let magazineArray = magazineText.split(" ")
  let magazineObj = {}
  magazineArray.forEach(word =>{
    if(!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++
  })
  let noteIsPossible = true;
  noteArray.forEach(word =>{
    if(magazineObj[word]){
      magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible=false;
  })
  console.log(magazineObj);
  return noteIsPossible;
}

let key = 'this is not true'
let secret = 'this is true'

console.log(harmlessRansomNote(key,secret))
