const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = Array.from(tabs.querySelectorAll("[role='tabpanel']"));

function tabClickHandler(e) {
  tabPanels.forEach(panel => (panel.hidden = true));
  tabButtons.forEach(button => button.setAttribute("aria-selected", false));
  event.currentTarget.setAttribute("aria-selected", true);
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener("click", tabClickHandler));
