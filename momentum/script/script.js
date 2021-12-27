document.addEventListener(
  "DOMContentLoaded",
  function () {
    const imagePaths = [
      "pic1.jpg",
      "pic2.jpg",
      "pic3.jpg",
      "pic4.jpg",
      "pic5.jpg",
    ];

    const image = imagePaths[Math.floor(Math.random() * imagePaths.length)];

    document.getElementById("image").setAttribute("src", `./images/${image}`);

    var focusInput = document.getElementById("focus");
    chrome.storage.sync.get(["focus"], function (result) {
      if (result.focus) {
        focusInput.value = result.focus;
      }
    });

    focusInput.addEventListener("keypress", function (event) {
      chrome.storage.sync.set({ focus: event.target.value });
    });
  },
  false
);
