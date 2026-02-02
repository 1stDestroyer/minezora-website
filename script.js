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

function copyModalIP() {
  var el = document.getElementById("modal-server-ip");
  if (!el) return;
  var ip = el.textContent;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(ip).then(function() {
      showModalCopyFeedback();
    });
  } else {
    var ta = document.createElement("textarea");
    ta.value = ip;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showModalCopyFeedback();
    } finally {
      document.body.removeChild(ta);
    }
  }
}

function showModalCopyFeedback() {
  var msg = document.getElementById("modal-copy-msg");
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

  var modal = document.getElementById("play-modal");
  var modalOverlay = document.getElementById("play-modal-overlay");
  var playTrigger = document.getElementById("play-now-trigger");
  var modalClose = document.querySelector(".modal-close");

  // --- Drawer Logic ---
  if (drawer && overlay) {
    function isDrawerOpen() {
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

    if (toggle) {
      toggle.addEventListener("click", function () {
        if (isDrawerOpen()) closeDrawer();
        else openDrawer();
      });
    }

    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);
  }

  // --- Modal Logic ---
  if (modal && modalOverlay) {
    function isModalOpen() {
      return modal.classList.contains("is-active");
    }

    function openModal(e) {
      if (e) e.preventDefault();
      modal.classList.add("is-active");
      modalOverlay.classList.add("is-active");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("is-active");
      modalOverlay.classList.remove("is-active");
      document.body.style.overflow = ""; 
    }

    if (playTrigger) playTrigger.addEventListener("click", openModal);
    if (modalClose) modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
  }

  // Global Escape Key Listener
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (drawer && drawer.classList.contains("is-open")) closeDrawer();
      if (modal && modal.classList.contains("is-active")) closeModal();
    }
  });
})();