function copyIP() {
  const ip = document.getElementById("server-ip").innerText;
  navigator.clipboard.writeText(ip);

  const msg = document.getElementById("copy-msg");
  msg.innerText = "Copied!";
  setTimeout(() => msg.innerText = "", 2000);
}
