function showTab(tabId) {
  const tabContents = document.querySelectorAll(".tab-content");
  const tabBtns = document.querySelectorAll(".tab-btn");

  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  tabBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");
  document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add("active");
}
