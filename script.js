function copyIP() {
  var el = document.getElementById("server-ip");
  if (!el) return;
  var ip = el.textContent;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(ip);
  } else {
    var ta = document.createElement("textarea");
    ta.value = ip;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(ta);
    }
  }
  var msg = document.getElementById("copy-msg");
  if (msg) {
    msg.textContent = "Copied!";
    setTimeout(function () {
      msg.textContent = "";
    }, 2000);
  }
}

(function () {
  var drawer = document.getElementById("drawer");
  var overlay = document.getElementById("drawer-overlay");
  var toggle = document.querySelector(".nav-toggle");
  var closeBtn = document.querySelector(".drawer-close");

  if (!drawer || !overlay) return;

  function isOpen() {
    return drawer.classList.contains("is-open");
  }

  function openDrawer() {
    drawer.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.classList.add("drawer-open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.body.classList.remove("drawer-open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
  }

  function toggleDrawer() {
    if (isOpen()) closeDrawer();
    else openDrawer();
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      toggleDrawer();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  overlay.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      closeDrawer();
    }
  });
})();
