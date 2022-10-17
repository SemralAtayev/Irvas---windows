const modals = () => {
  function bindModal(
    modalTriggerSelector,
    modalWindowSelector,
    dataModalCloseSelector
  ) {
    let modalTrigger = document.querySelectorAll(modalTriggerSelector);
    let modalWindow = document.querySelector(modalWindowSelector);
    let modalClose = document.querySelectorAll(dataModalCloseSelector);

    modalTrigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        modalWindow.classList.add('fadeIn', 'd-block', 'animated');
        modalWindow.classList.remove('fadeOut', 'd-none');       
        document.body.style.overflow = "hidden";
      });
    });
    modalClose.forEach((item) => {
      item.addEventListener("click", () => {
        modalWindow.classList.remove('fadeIn', 'd-block');  
        modalWindow.classList.add('fadeOut', 'd-none');    
        document.body.style.overflow = "";
      });
    });
    modalWindow.addEventListener("click", (e) => {
      if (e.target && e.target === modalWindow) {
         modalWindow.classList.remove('fadeIn', 'd-block');  
        modalWindow.classList.add('fadeOut', 'd-none');   
       
        document.body.style.overflow = "";
      }
    });
  }
  
  function timerModal(selector, timer){
    setTimeout(function(){
        document.querySelector(selector).style.display = 'block';
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
  // timerModal('.popup', 120000);
};

export default modals;
