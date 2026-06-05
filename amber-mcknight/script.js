const formTag = document.getElementById("imageFormId");
formTag.onsubmit = handleSubmit;

const cap1 = document.getElementById("cap1");
const cap2 = document.getElementById("cap2");
const cap3 = document.getElementById("cap3");

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const isChecked1 = form.elements.checkbox1.checked;
  const isChecked2 = form.elements.checkbox2.checked;
  const isChecked3 = form.elements.checkbox3.checked;

  if (isChecked1) {
    cap1.innerText = "Amber";
  } else {
    cap1.innerText = "";
  }
  if (isChecked2) {
    cap2.innerText = "Vision of Peace";
  } else {
    cap2.innerText = "";
  }
  if (isChecked3) {
    cap3.innerText = "Computers";
  } else {
    cap3.innerText = "";
  }
}
