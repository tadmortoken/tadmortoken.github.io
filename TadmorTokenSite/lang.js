/* ============================================================
   📘 ملف lang.js
   مسؤول عن إدارة اللغة في موقع Tadmor Token
   يدعم العربية والإنجليزية ويعمل على جميع الصفحات
   ============================================================ */

// 📦 استرجاع اللغة المحفوظة من Local Storage أو الإنجليزية افتراضيًا
let currentLang = localStorage.getItem("tadmorLang") || "en";

/**
 * 🧠 دالة لتطبيق اللغة على الصفحة
 * @param {string} lang - 'en' أو 'ar'
 */
function applyLanguage(lang) {
  const translatable = document.querySelectorAll("[data-en]");
  const langBtn = document.getElementById("langToggle");

  // 🧩 تحديث اتجاه الصفحة
  document.body.style.direction = lang === "ar" ? "rtl" : "ltr";

  // 🔠 تحديث زر اللغة
  if (langBtn) langBtn.textContent = lang === "en" ? "AR" : "EN";

  // 🌍 تحديث النصوص
  translatable.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

/**
 * 🔁 تبديل اللغة وتخزينها في Local Storage
 */
function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  localStorage.setItem("tadmorLang", currentLang);
  applyLanguage(currentLang);
}

/**
 * 🚀 تهيئة السكربت عند تحميل الصفحة
 */
window.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  // 🕓 تحديث السنة في الفوتر إن وجدت
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 📌 ربط زر اللغة بالوظيفة
  const langBtn = document.getElementById("langToggle");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);
});
