/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var form = document.querySelector("form");
var input = document.querySelector("input");
form.addEventListener("submit", function (event) {
  console.log(event);
  event.preventDefault();
});
input.addEventListener("keydown", function (event) {
  if (event.key === "t") {
    input.style.color = "red";
  }

  console.log(event);
});
/**
 * Stop propagation : arrete la propagation de l'evenement
 */
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map