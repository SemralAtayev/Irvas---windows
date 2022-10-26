import checkForNumbers from "./checkForNumbers";

const stateFunction = function (state) {
  const balkonIcons = document.querySelectorAll(".balcon_icons_img");
  const balkonWidth = document.querySelectorAll("#width");
  const balkonHeight = document.querySelectorAll("#height");
  const tipStekla = document.querySelectorAll("#view_type");
  const temperaturaStekla = document.querySelectorAll(".checkbox");

  checkForNumbers("#width");
  checkForNumbers("#height");

  const appendToState = function (selector, event, prop) {
    selector.forEach((item, i) => {
      item.addEventListener(event, () => {
        if (item.nodeName == "INPUT") {
          if (item.type == "checkbox") {
            i === 0 ? (state[prop] = "холодный") : (state[prop] = "Теплый");

            selector.forEach((selected, j) => {
                selected.checked = false;
              if (i == j) {
                selected.checked = true;
              }
            });
          } else {
            state[prop] = item.value;
          }
        } else if (item.nodeName == "SELECT") {
          state[prop] = item.value;
        } else {
          state[prop] = i;
        }
      });
    });
  };

  appendToState(balkonIcons, "click", "balkonForm");
  appendToState(balkonWidth, "input", "shirina");
  appendToState(balkonHeight, "input", "visota");
  appendToState(tipStekla, "input", "tipStekla");
  appendToState(temperaturaStekla, "change", "temperatura");

  // console.log(balkonIcons);
};

export default stateFunction;
