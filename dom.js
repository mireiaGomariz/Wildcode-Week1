
// console.log("Holi");
//
//
// const choiceSpan = document.getElementById('show-choice');
// const selectors = document.getElementsByTagName('select');
// // Attach an event listener to each of the select elements,
// // responding to the "change" event
// for (let i = 0 ; i < selectors.length ; i++) {
//   selectors[i].addEventListener('change', event => {
//     // event.target is the selector that has been changed,
//     // its value is that of the selected option
//     choiceSpan.innerHTML = event.target.value;
//   });
// }


let arr1 = [23,1,-12,5,23,45];
let num = arr1[0];



  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < num) {
      num = arr1[i];
    }
  }

console.log(num)

// iguala la varibale num a la posicion en el index de la array, luego compara posicion por posicion.
// el array.lenght es para que termine al final de la array y el loop no sea infinito.
