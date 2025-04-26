document.getElementById("close-not-great").addEventListener("click", () => {
  document.getElementById("not-great-options").style.visibility = "hidden";
  console.log("work");
});

document.getElementById("not-great-btn").addEventListener("click", () => {
  document.getElementById("not-great-options").style.visibility = "visible";
});
