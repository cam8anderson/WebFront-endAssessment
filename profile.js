const colorButton = (evt) => {
  evt.preventDefault();

  alert("Green is my favorite color.");
};

const colorAlert = document.querySelector("#color");

colorAlert.addEventListener("click", colorButton);

const placeButton = (evt) => {
  evt.preventDefault();

  alert("Brighton is my favorite place.");
};

const placeAlert = document.querySelector("#place");

placeAlert.addEventListener("click", placeButton);

const ritualButton = (evt) => {
  evt.preventDefault();

  alert(
    "My favorite ritual is going snowboarding on friday nights with all of my friends."
  );
};

const ritualAlert = document.querySelector("#ritual");

ritualAlert.addEventListener("click", ritualButton);
