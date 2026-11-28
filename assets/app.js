const translations = Array.from(document.querySelectorAll("[data-en]"), (node) => ({
  node, zh: node.textContent, en: node.dataset.en,
}));
const accessibleLabels = Array.from(document.querySelectorAll("[data-en-label]"), (node) => ({
  node, zh: node.getAttribute("aria-label"), en: node.dataset.enLabel,
}));
const toggle = document.querySelector("[data-language]");
const storageKey = "profile-language";
let language = "zh";
try {
  if (localStorage.getItem(storageKey) === "en") language = "en";
} catch {
  // Browsers may disable persistent storage.
}

function renderLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh" ? "张博锐 · 机器人系统软件" : "Borui Zhang · Robotics Systems Software";
  for (const item of translations) item.node.textContent = item[language];
  for (const item of accessibleLabels) item.node.setAttribute("aria-label", item[language]);
  toggle.textContent = language === "zh" ? "English" : "中文";
  toggle.lang = language === "zh" ? "en" : "zh-CN";
  toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
}

toggle.addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  renderLanguage();
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    // The selected language still applies to this page.
  }
});
renderLanguage();
toggle.hidden = false;
