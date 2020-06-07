const video = document.getElementById("videoElement");
const MODEL_URL= require('/models');
const faceapi = require('face-api.js');
console.log('touched')

/*Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
  faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
  faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
])
.then(()=>{console.log('done')})
.catch(e=>{console.log(e)})
*/


function startVideo(){
    console.log('working here');
    
}

video.addEventListener('play',()=>{
  console.log('Playing Noww!!');
})

startVideo();