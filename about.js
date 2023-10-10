console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("The form has been submitted successfully");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const compliment = (evt) => {
  evt.preventDefault();

  alert("this duck loves you!!!");
};

let msvr = document.querySelector("img");

msvr.addEventListener("mouseover", compliment);
