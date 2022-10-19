const forms = () => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  const numberInput = document.querySelectorAll('input[name = "user_phone"]');

  numberInput.forEach( el => {
        el.addEventListener('input', () =>{
            el.value = el.value.replace(/\D/g, '' );
            console.log('ss');
        });
  });

  let clearAllInputs = function (inputSelector) {
    inputSelector.forEach((input) => {
      input.value = "";
    });
  };

  let request = async function (url, data) {
    document.querySelector(".status").innerHTML = messagesToShow.loading;
    let fetchRequest = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await fetchRequest.text();
  };

  let messagesToShow = {
    loading: "Идет загрузка",
    sucsess: "Спасибо, мы вам перезвоним",
    fail: "Неудачная попытка",
  };

  const sendRequest = function () {
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        let messageBlock = document.createElement("div");
        messageBlock.classList.add("status");
        form.append(messageBlock);

        let formData = new FormData(form);

        request("/assets/server.php", formData)
          .then((request) => {
            messageBlock.innerHTML = messagesToShow.sucsess;
            console.log(request);
          })
          .catch((error) => {
            messageBlock.innerHTML = messagesToShow.error;
            console.throw(error);
          })
          .finally( () =>{
            clearAllInputs(inputs);
            setTimeout( () => {
              messageBlock.remove();              
            }, 5000);
          } );
      });
    });
  };

  sendRequest();
};

export default forms;
