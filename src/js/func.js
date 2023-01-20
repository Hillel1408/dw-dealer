export default func = (phoneInput, nameInput, btn, popup, succes) => {
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
      popup.style.display = "none";
      succes.style.display = "flex";
      setTimeout(() => {
        popup.style.display = "flex";
        succes.style.display = "none";
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  }
};
