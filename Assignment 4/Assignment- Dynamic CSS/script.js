const text = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSize = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssProps = document.getElementById("css-props");

/* Change text color */
colorBtn.addEventListener("click", () => {
  text.style.color = colorBox.value;
});

/* Change font size using range slider */
fontSize.addEventListener("input", () => {
  text.style.fontSize = fontSize.value + "px";
});

/* Toggle italic */
italicBtn.addEventListener("click", () => {
  text.style.fontStyle =
    text.style.fontStyle === "italic" ? "normal" : "italic";
});

/* Toggle underline */
underlineBtn.addEventListener("click", () => {
  text.style.textDecoration =
    text.style.textDecoration === "underline" ? "none" : "underline";
});

/* Toggle bold */
boldBtn.addEventListener("click", () => {
  text.style.fontWeight =
    text.style.fontWeight === "bold" ? "normal" : "bold";
});

/* Change font family */
fontList.addEventListener("change", () => {
  text.style.fontFamily = fontList.value;
});

/* Get CSS styles */
getStyleBtn.addEventListener("click", () => {
  let styles = "";

  if (text.style.color)
    styles += `color: ${text.style.color}; `;

  if (text.style.fontSize)
    styles += `font-size: ${text.style.fontSize}; `;

  if (text.style.fontStyle === "italic")
    styles += `font-style: italic; `;

  if (text.style.fontWeight === "bold")
    styles += `font-weight: bold; `;

  if (text.style.textDecoration === "underline")
    styles += `text-decoration: underline; `;

  if (text.style.fontFamily)
    styles += `font-family: ${text.style.fontFamily}; `;

  cssProps.textContent = styles.trim();
});