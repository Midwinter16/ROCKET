const targetElementPropsList = ["todo", "home"];

const htmlElementAsString = (target: HTMLElement): string => {
  const targetName = target.tagName.toLowerCase();
  if (targetName === "body") return "";
  console.log("target", target);
  const className =
    target.classList.value !== "" ? `class="${target.classList.value}"` : "";
  const id = target.id ? `id="${target.id}"` : "";
  const innerText = target.innerText;
  return `<${targetName} ${id} ${className}>${innerText}</${targetName}>`;
};

const getTargetDomByPointerEvent = (e: PointerEvent) => {
  const el = document.elementFromPoint(e.pageX, e.pageY);
  if (el) return el as HTMLElement;
  return null;
};

window.addEventListener("click", (e: PointerEvent) => {
  const el = getTargetDomByPointerEvent(e);
  if (!el) return;
  console.log(el);
  const detail = htmlElementAsString(el);
  if (detail) console.log(detail);
});
