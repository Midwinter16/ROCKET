class Drag {
  constructor(dragEle, grabEle) {
    this.isMousedown = false;
    this.startX = 0;
    this.startY = 0;
    this.moveX = 0;
    this.moveY = 0;
    this.targetTransformX = 0;
    this.targetTransformY = 0;
    this.dragEle = dragEle;
    this.grabEle = grabEle ? grabEle : dragEle;
    this._initEvent();
  }
  _getTargetTransform = () => {
    const regex = /translate3d\((-?\d+)px, (-?\d+)px, (-?\d+)px\)/;
    const match = this.dragEle.style.transform.match(regex);
    if (match) return [parseInt(match[1]), parseInt(match[2])];
    return [0, 0];
  };
  _grabMousedown = (e) => {
    const [x, y] = this._getTargetTransform();
    this.isMousedown = true;
    this.moveX = 0;
    this.moveY = 0;
    this.startX = e.pageX;
    this.startY = e.pageY;
    this.targetTransformX = x;
    this.targetTransformY = y;
  };
  _grabMousemove = (e) => {
    if (this.isMousedown) {
      this.moveX = e.pageX - this.startX;
      this.moveY = e.pageY - this.startY;
      this.dragEle.style.transform = `translate3d(${
        this.targetTransformX + this.moveX
      }px, ${this.targetTransformY + this.moveY}px, 0px)`;
      this.dragEle.style["will-change"] = "transform";
    }
  };
  _grabMouseup = () => {
    this.isMousedown = false;
  };
  _grabMouseleave = () => {
    this.isMousedown = false;
  };
  _initEvent = () => {
    if (this.dragEle && this.grabEle) {
      this.grabEle.addEventListener("mousedown", this._grabMousedown, false);
      this.grabEle.addEventListener("mousemove", this._grabMousemove, false);
      this.grabEle.addEventListener("mouseup", this._grabMouseup, false);
      this.grabEle.addEventListener("mouseleave", this._grabMouseleave, false);
      this.grabEle.style.cursor = "grab";
    } else {
      throw new Error("Drag 实例创建失败，目标元素不存在");
    }
  };
  removeEvent = () => {
    this.grabEle.removeEventListener("mousedown", this._grabMousedown, false);
    this.grabEle.removeEventListener("mousemove", this._grabMousemove, false);
    this.grabEle.removeEventListener("mouseup", this._grabMouseup, false);
    this.grabEle.removeEventListener("mouseleave", this._grabMouseleave, false);
    this.grabEle.style.cursor = "";
  };
}

export default Drag;
