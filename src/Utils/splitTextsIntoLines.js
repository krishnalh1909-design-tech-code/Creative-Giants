export function splitTextIntoLines(element) {
  element.style.display = "block";

  const words = element.textContent.trim().split(" ");
  element.innerHTML = "";

  const lines = [];
  const containerWidth = element.getBoundingClientRect().width;

  // get computed line height
  const computedStyle = window.getComputedStyle(element);
  const lineHeight = computedStyle.lineHeight;

  let lineMask = document.createElement("span");
  let lineText = document.createElement("span");

  lineMask.style.display = "block";
  lineMask.style.overflow = "hidden";
  lineMask.style.lineHeight = lineHeight;
  

  lineText.style.display = "inline-block";
  lineText.style.whiteSpace = "nowrap";
  lineText.style.paddingBottom="12px"

  lineMask.appendChild(lineText);
  element.appendChild(lineMask);

  words.forEach((word) => {
    const prevText = lineText.textContent;
    lineText.textContent = prevText ? `${prevText} ${word}` : word;

    if (lineText.scrollWidth > containerWidth) {
      lineText.textContent = prevText;
      lines.push(lineText);

      lineMask = document.createElement("span");
      lineText = document.createElement("span");

      lineMask.style.display = "block";
      lineMask.style.overflow = "hidden";
      lineMask.style.lineHeight = lineHeight;

      lineText.style.display = "inline-block";
      lineText.style.whiteSpace = "nowrap";
      lineText.textContent = word;
      lineText.style.paddingBottom="12px"

      lineMask.appendChild(lineText);
      element.appendChild(lineMask);
    }
  });

  lines.push(lineText);
  return lines;
}
