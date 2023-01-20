let phoneInput = document.querySelector(".phone3");
let nameInput = document.querySelector(".name3");
let btn = document.querySelector(".btn4");

const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});

phoneInput.addEventListener("input", phoneInputHandler);
btn.addEventListener("click", btnHandler);

function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    btn.classList.add("btn-active");
  } else {
    btn.classList.remove("btn-active");
  }
}

async function btnHandler(e) {
  e.preventDefault();
  try {
    await fetch("send_msg.php", {
      method: "POST",
      body: { name: nameInput.value, phone: phoneMask.unmaskedValue },
    });
  } catch (err) {
    console.log(err);
  }
}
