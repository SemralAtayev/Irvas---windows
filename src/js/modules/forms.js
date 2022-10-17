const forms = () => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");

  function sendForm() {
    const messages = {
      loading: "Идет загрузка",
      success: "Спасибо, мы вам перезвоним",
      fail: "Что то пошло не так",
    };

   const postData = async (url, data) => {
      document.querySelector('.status').innerHTML = messages.loading;
      let result = await fetch(url, {
            method: 'POST',
            body: data,
      });
     
      return await result.text();
   };

   const clearInputs = (inputsSelector) => {
      inputsSelector.forEach((input) =>{
            input.value = '';
      });
   };

    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        let messageBlock = document.createElement("div");
        messageBlock.classList.add("status");
        form.appendChild(messageBlock);

        const formData = new FormData(form);

        postData('/assets/server.php', formData)
        .then((infoText) => {
            console.log(infoText);
            messageBlock.innerHTML = messages.success;                  
        })
        .catch(() => {
            messageBlock.innerHTML = messages.fail; 
        })
        .finally(() => {
            clearInputs(inputs);
            setTimeout( () => {
                  messageBlock.remove();
            }, 2000);
           
        });
      });
    });
  }

  sendForm();
};

export default forms;
