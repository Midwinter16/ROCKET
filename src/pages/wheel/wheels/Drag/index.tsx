// 原元素消失，拖拽元素出现

import { useEffect } from "react";
import Drag from "./drag";

const Draggable = () => {
  useEffect(() => {
    const dragEle = document.querySelector(".drag");
    const dragInstance = new Drag(dragEle);
    return () => dragInstance.removeEvent();
  });
  return (
    <div style={{ height: "1000px" }}>
      <div
        className="drag"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
      >
        <div
          className="grab"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "blue",
          }}
        >
          grab here!
        </div>
      </div>
    </div>
  );
};

export default Draggable;
