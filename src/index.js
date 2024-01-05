import { setRedirectLink } from "./utils.js";
import "./css/index.css";

const article1 = document.querySelector("#article-1");
const article2 = document.querySelector("#article-2");
const article3 = document.querySelector("#article-3");

article1.addEventListener("click", () => {
  window.location.href = setRedirectLink("content", 1538646651342, "content");
});

article2.addEventListener("click", () => {
  window.location.href = setRedirectLink("content", 1539507849063, "content");
});

article3.addEventListener("click", () => {
  window.location.href = setRedirectLink("content", 1539674167504, "content");
});
