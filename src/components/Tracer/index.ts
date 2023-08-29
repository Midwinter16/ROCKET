/**
 * 通过设置对象来筛选元素的类名以及文本
 * 往后每添加一个不同的选择元素，都要添加对应的类型、判断器和索引对象
 * selector：className 判断
 * text：文本判断
 */
interface targetRulesProps {
  selector?: string;
  text?: string;
}

const targetRules: targetRulesProps[] = [
  {
    selector: "item",
  },
  {
    text: "3",
  },
  {
    selector: "item",
    text: "3",
  },
];


// selector 判断器
const selectorJudge = (el: HTMLElement, target: string): boolean => {
  return [...el.classList].indexOf(target) !== -1;
};

// text 判断器
const textJudge = (el: HTMLElement, target: string): boolean => {
  return el.innerText === target;
};

// 索引对象
const targetFuncObj = {
  text: textJudge,
  selector: selectorJudge,
};

// 进一步处理点击元素的各项信息
const htmlElementAsString = (target: HTMLElement): string => {
  const targetName = target.tagName.toLowerCase();
  if (targetName === "body") return "";
  const className =
    target.classList.value !== "" ? `class="${target.classList.value}"` : "";
  const id = target.id ? `id="${target.id}"` : "";
  const innerText = target.innerText;
  return `<${targetName} ${id} ${className}>${innerText}</${targetName}>`;
};

// 通过获取点击坐标来得到元素
const getTargetDomByPointerEvent = (e: MouseEvent) => {
  const el = document.elementFromPoint(e.pageX, e.pageY);
  if (el) return el as HTMLElement;
  return null;
};

// 全局监听，通过 targetElementPropsList 来筛选需要监听的元素
window.addEventListener("click", (e: MouseEvent) => {
  const el = getTargetDomByPointerEvent(e);
  if (!el) return;

  if (targetRules.length) {
    targetRules.forEach((rules) => {
      const judgeRules = Object.entries(rules).every(([key, value]) =>
        targetFuncObj[key](el, value),
      );
      if (judgeRules) {
        console.log("hit");
      }
    });
  }
  // const detail = htmlElementAsString(el);
  // if (detail) console.log(detail);
});
