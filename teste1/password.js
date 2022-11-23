const passCampo = document.getElementById("password");
const showButton = document.querySelector("span img");

showButton.onclick = () => {
  if (passCampo.type === "password") {
    passCampo.type = "text";
    showButton.classList.add("hideBtn");
  } else {
    passCampo.type = "password";
    showButton.classList.remove("hideBtn");
  }
};
