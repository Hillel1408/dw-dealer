(() => {
  // src/components/sections/reviews/reviews.js
  $(document).ready(function() {
    $(".reviews__slider").slick({
      dots: false,
      arrows: false,
      asNavFor: ".reviews__block-video"
    });
    $(".reviews__block-video").slick({
      asNavFor: ".reviews__slider",
      arrows: false,
      dots: false
    });
  });

  // src/js/func.js
  var func_default = func = (phoneInput4, nameInput4, btn4, popup4, succes4) => {
    const phoneMask = new IMask(phoneInput4, {
      mask: "+{7}(000)000-00-00"
    });
    phoneInput4.addEventListener("input", phoneInputHandler);
    btn4.addEventListener("click", btnHandler);
    function phoneInputHandler() {
      if (phoneMask.masked.isComplete) {
        btn4.classList.add("btn-active");
      } else {
        btn4.classList.remove("btn-active");
      }
    }
    async function btnHandler(e) {
      e.preventDefault();
      try {
        await fetch("send_msg.php", {
          method: "POST",
          body: { name: nameInput4.value, phone: phoneMask.unmaskedValue }
        });
        popup4.style.display = "none";
        succes4.style.display = "flex";
        setTimeout(() => {
          popup4.style.display = "flex";
          succes4.style.display = "none";
        }, 3e3);
      } catch (err) {
        console.log(err);
      }
    }
  };

  // src/components/sections/popup/popup.js
  var phoneInput = document.querySelector(".phone");
  var nameInput = document.querySelector(".name");
  var btn = document.querySelector(".btn3");
  var popup = document.querySelector(".popup2");
  var succes = document.querySelector(".succes2");
  func_default(phoneInput, nameInput, btn, popup, succes);

  // src/components/sections/popup-2/popup-2.js
  var phoneInput2 = document.querySelector(".phone2");
  var nameInput2 = document.querySelector(".name2");
  var btn2 = document.querySelector(".btn2");
  var popup2 = document.querySelector(".popup3");
  var succes2 = document.querySelector(".succes3");
  func_default(phoneInput2, nameInput2, btn2, popup2, succes2);

  // src/components/sections/questions/questions.js
  var phoneInput3 = document.querySelector(".phone3");
  var nameInput3 = document.querySelector(".name3");
  var btn3 = document.querySelector(".btn4");
  var popup3 = document.querySelector(".popup4");
  var succes3 = document.querySelector(".succes4");
  func_default(phoneInput3, nameInput3, btn3, popup3, succes3);

  // src/components/index.js
  var popupLinks = document.querySelectorAll(".popup-link");
  var body = document.querySelector("body");
  var modalText = document.querySelector(".modal-text");
  function bodyLock() {
    body.classList.add("lock");
  }
  function popupClose(popupActive) {
    popupActive.classList.remove("open");
    body.classList.remove("lock");
  }
  function popupOpen(curentPopup) {
    if (curentPopup) {
      const popupActive = document.querySelector(".popup.open");
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add("open");
      curentPopup.addEventListener("click", function(e) {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }
  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function(e) {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
        switch (e.target.dataset.id) {
          case "1":
            modalText.innerHTML = "\u0438 \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442 \u0432\u0430\u043C \u0432 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F";
            break;
          case "2":
            modalText.innerHTML = "\u0438 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0432\u0430\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0443\u0436\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432";
            break;
          case "3":
            modalText.innerHTML = "\u0438 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0432\u0430\u043C \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0438 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0443";
            break;
          case "4":
            modalText.innerHTML = "\u0438 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0432\u0430\u043C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430";
            break;
        }
      });
    }
  }
  var popupCloseIcon = document.querySelectorAll(".close-popup");
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function(e) {
        popupClose(el.closest(".popup"));
        e.preventDefault();
      });
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.keyCode === 27) {
      const popupActive = document.querySelector(".popup.open");
      popupClose(popupActive);
    }
  });
})();
//# sourceMappingURL=index.js.map
