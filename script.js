// Bouton Validate Start

function changeText() {
  let element = document.getElementById("btn-start");
  // @ts-ignore
  if (element.value == "Validate") {
    // @ts-ignore
    element.value = "Start";
    // @ts-ignore
  } else element.value = "Validate";
}
