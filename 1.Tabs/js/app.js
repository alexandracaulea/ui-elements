const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = Array.from(tabs.querySelectorAll("[role='tabpanel']"));

function tabClickHandler(e) {
  // 1. Hide all tabPanels
  tabPanels.forEach(panel => (panel.hidden = true));
  // 2. Unselect all tabButtons
  tabButtons.forEach(button => button.setAttribute("aria-selected", false));
  // 3. Mark the button that was clicked as selected
  event.currentTarget.setAttribute("aria-selected", true);
  // 4. Find the id of the button that was clicked
  const { id } = event.currentTarget;
  console.log(id);
  // 5. Show the panel
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener("click", tabClickHandler));
