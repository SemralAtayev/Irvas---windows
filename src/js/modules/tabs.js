const tabs = (
  tabHeaderSelector,
  tabSelector,
  contentBlockSelector,
  activeClassSelector
) => {
  let tabHeader = document.querySelector(tabHeaderSelector);
  let tabs = document.querySelectorAll(tabSelector);
  let contentBlock = document.querySelectorAll(contentBlockSelector);

  function closeTabsContent() {
    contentBlock.forEach((item) => {
      // item.style.display = "none";
      item.classList.remove("fadeIn", "d-block", "animated");
      item.classList.add("fadeOut", "d-none", "animated");
    });
    tabs.forEach((tab) => {
      tab.classList.remove(activeClassSelector);
    });
  }

  function openCurrentTab(i = 0) {
    // contentBlock[i].style.display = "block";
    contentBlock[i].classList.remove("fadeOut", "d-none", "animated");
    contentBlock[i].classList.add("fadeIn", "d-block", "animated");
    tabs[i].classList.add(activeClassSelector);
  }

  tabHeader.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tabs.forEach((item, n) => {
        if (target == item || target.parentNode == item) {
          closeTabsContent();
          openCurrentTab(n);
        }
      });
    }
  });

  closeTabsContent();
  openCurrentTab();
};

export default tabs;
