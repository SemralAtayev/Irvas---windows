const modals = () => {
  function bindModal(
    modalTriggerSelector,
    modalWindowSelector,
    dataModalCloseSelector,
    closeOnOverlays = true
  ) {
    const modalTrigger = document.querySelectorAll(modalTriggerSelector);
    const modalWindow = document.querySelector(modalWindowSelector);
    const modalClose = document.querySelectorAll(dataModalCloseSelector);
    const windows = document.querySelectorAll("[data-modal]");
    const parentBlock = document.querySelector(".popup_calc").querySelectorAll('input');
    
    parentBlock.forEach((element) =>{
      element.addEventListener('input', (event)=>{
          if(event.target.value){
             console.log(event.target.value);
          }
      });
    });


    //click on trigger to call modal block
    modalTrigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        //close all modal windows
        windows.forEach((e) => {
          e.classList.remove("fadeIn", "d-block", "animated");
          e.classList.add("fadeOut", "d-none");
        });

        modalWindow.classList.add("fadeIn", "d-block", "animated");
        modalWindow.classList.remove("fadeOut", "d-none");
        document.body.style.overflow = "hidden";
      });
    });

    // click on close button to xlose modal block
    modalClose.forEach((item) => {
      item.addEventListener("click", () => {
        modalWindow.classList.remove("fadeIn", "d-block");
        modalWindow.classList.add("fadeOut", "d-none");
        document.body.style.overflow = "";
      });
    });

    // click on other space rather than modal window
    modalWindow.addEventListener("click", (e) => {
      if (e.target && e.target === modalWindow && closeOnOverlays) {

         //close all modal windows
        windows.forEach((e) => {
          e.classList.remove("fadeIn", "d-block", "animated");
          e.classList.add("fadeOut", "d-none");
        });

        modalWindow.classList.remove("fadeIn", "d-block");
        modalWindow.classList.add("fadeOut", "d-none");
        document.body.style.overflow = "";
      }
    });
  }

  function timerModal(selector, timer) {
    setTimeout(function () {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, timer);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer [data-modal-close]"
  );
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc [data-modal-close]");
  bindModal(".phone_link", ".popup", ".popup [data-modal-close]");

  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button','.popup_calc_end', '.popup_calc_end_close', false );
  // timerModal('.popup', 120000);
};

export default modals;
