const tabs = (
  tabHeaderSelector,
  tabsSelector,
  contentBlockSelector,
  activeClassSelector,
  display = 'block',
) => {
  let tabHeader = document.querySelector(tabHeaderSelector);
  let tabs = document.querySelectorAll(tabsSelector);
  let contentBlock = document.querySelectorAll(contentBlockSelector);

  function closeTabsContent() {
    contentBlock.forEach((item) => {
      // item.style.display = "none";
      item.classList.remove("fadeIn", "d-block", "animated");
      item.classList.add("fadeOut", "animated");
      item.style.display = "none";
    });
    tabs.forEach((tab) => {
      tab.classList.remove(activeClassSelector);
    });
  }

  function openCurrentTab(i = 0) {
    // contentBlock[i].style.display = "block";
    contentBlock[i].classList.remove("fadeOut", "d-none", "animated");
    contentBlock[i].classList.add("fadeIn", "animated");
    contentBlock[i].style.display = display;
    tabs[i].classList.add(activeClassSelector);
  }

  tabHeader.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabsSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))
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
