let subscribeBtn = document.getElementById("subscribe"),
    signUp = document.getElementById("step1"),
    input = document.getElementById("email"),
    invalidEmail = document.querySelector(".invalid"),
    bgPic = document.querySelector(".bgpic"),
    confirmed = document.querySelector(".confirmed");


subscribeBtn.addEventListener("click" , (e) => {
  let email = input.value.trim()
  let regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/

  let validEmail = regex.test(email)

  if (validEmail) {
    signUp.style.display = "none";
    confirmed.style.display = "block"
    bgPic.style.display = "none"
  } else {
    invalidEmail.style.display = "block"
  }

})