function getData() {
  fetch("/api")
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText = data.message;
      document.getElementById("version").innerText = data.version;
    });
}
