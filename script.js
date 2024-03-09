// Bouton Validate Start

// function changeText() {
//   let element = document.getElementById("btn-start");

//   // @ts-ignore
//   if (element.value == "Validate") {
//     // @ts-ignore
//     element.value = "Start";
//     // @ts-ignore
//   } else element.value = "Validate";
// }

// let questionDisplay = document.getElementById("main");

function displayMain() {
  let element = document.getElementById("btn-start");
  let questionDisplay = document.getElementById("main");
  let headerDisplay = document.getElementById("main-page");

  // @ts-ignore
  if (element.value === "Validate") {
    // @ts-ignore
    questionDisplay.style.display = "block";
    // @ts-ignore
    headerDisplay.style.display = "none";

    // @ts-ignore
    element.value = "Start";
  } else {
    // headerDisplay.style.display = "block";
    // @ts-ignore
    questionDisplay.style.display = "block";
    // @ts-ignore
    element.value = "Validate";
  }
}
// questionDisplay.style.display = "block";
function changeText() {
  let element = document.getElementById("btn-start");

  // @ts-ignore
  if (element.value == "Validate") {
    // @ts-ignore
    element.value = "Start";
    // @ts-ignore
  } else element.value = "Validate";
}

// function masquer_div(id)
// {
//   if (document.getElementById(id).style.display == 'none') {
//        document.getElementById(id).style.display = 'block';
//   }
//   else {
//        document.getElementById(id).style.display = 'none';
//   }
// }
