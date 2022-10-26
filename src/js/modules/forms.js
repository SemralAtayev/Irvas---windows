import checkForNumbers from "./checkForNumbers";

const forms = (state) => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");

  checkForNumbers('input[name = "user_phone"]');

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
        if (form.getAttribute("data-form") == "end") {
          for (let key in state) {
            formData.append(key, state[key]);
          }
        }

        request("/assets/server.php", formData)
          .then((request) => {
            messageBlock.innerHTML = messagesToShow.sucsess;
            console.log(request);
          })
          .catch((error) => {
            messageBlock.innerHTML = messagesToShow.error;
            console.throw(error);
          })
          .finally(() => {
            clearAllInputs(inputs);
            setTimeout(() => {
              //delete message block
              messageBlock.remove();
              //close all modal windows
              document.querySelectorAll("[data-modal]").forEach((e) => {
                e.classList.remove("fadeIn", "d-block", "animated");
                e.classList.add("fadeOut", "d-none");
              });
              document.body.style.overflow = "";
              // clear fomr data
              formData = {};
              console.log(formData);
            }, 5000);
          });
      });
    });
  };

  sendRequest();
};

export default forms;
