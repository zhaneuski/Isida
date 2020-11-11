//
// const key01 = document.getElementById('01');
// const key02 = document.getElementById('02');
// const key03 = document.getElementById('03');
// const key004 = document.getElementById('004');
// const sitCenter = document.getElementById('sit_center');
// const call = document.getElementById('call');
// const video = document.getElementById('video');
//
// document.addEventListener('keydown', function(event){
//     if (event.altKey && ['!','1'].includes(event.key) ) {
//         if (key01.hasAttribute('checked')){
//             key01.removeAttribute('checked');
//         } else {
//             key01.setAttribute('checked', 'checked');
//         }
//     }
// });
//
// document.addEventListener('keydown', function(event){
//     if (event.altKey && ['@','2'].includes(event.key) ) {
//         if (key02.hasAttribute('checked')){
//             key02.removeAttribute('checked');
//         } else {
//             key02.setAttribute('checked', 'checked');
//         }
//     }
// });
//
// document.addEventListener('keydown', function(event){
//     if (event.altKey && ['#','3'].includes(event.key) ) {
//         if (key03.hasAttribute('checked')){
//             key03.removeAttribute('checked');
//         } else {
//             key03.setAttribute('checked', 'checked');
//         }
//     }
// });
//
// document.addEventListener('keydown', function(event){
//     if (event.altKey && ['$','4'].includes(event.key) ) {
//         if (key004.hasAttribute('checked')){
//             key004.removeAttribute('checked');
//         } else {
//             key004.setAttribute('checked', 'checked');
//         }
//     }
// });
//
// document.addEventListener('keydown', function(event){
//     if (event.altKey && ['%','5'].includes(event.key) ) {
//         if (sitCenter.hasAttribute('checked')){
//             sitCenter.removeAttribute('checked');
//         } else {
//             sitCenter.setAttribute('checked', 'checked');
//         }
//     }
// });
//
// document.addEventListener('keydown', function(event){
//     if (event.altKey && ['^','6'].includes(event.key) ) {
//         if (call.hasAttribute('checked')){
//             call.removeAttribute('checked');
//         } else {
//             call.setAttribute('checked', 'checked');
//         }
//     }
// });
//
// document.addEventListener('keydown', function(event){
//     if (event.altKey && ['&','7'].includes(event.key) ) {
//         if (video.hasAttribute('checked')){
//             video.removeAttribute('checked');
//         } else {
//             video.setAttribute('checked', 'checked');
//         }
//     }
// });


// const description = document.getElementById('description');
//
//
//
// description.addEventListener('keydown', function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         // console.log('hello');
//     }
//     if (event.shiftKey && event.key === "Enter") {
//         description.value = description.value + "\n";
//     }
// })

const label = document.querySelectorAll('.main_label');
const input = document.querySelectorAll('.input_text');

let i;
let j;

for (i = 0; i < label.length; i++) {
    for (j = 0; j < input.length; j++) {
        if ( i === j ) {
            input[j].addEventListener('focus', function() {
                label.classList.add('active');
            });
        }
    }
}