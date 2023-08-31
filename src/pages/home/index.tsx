import { useEffect } from "react";

const HomePage = () => {
  const moveObj = {
    start: 0,
    end: 0,
  };
  useEffect(() => {
    const el = document.querySelector("#contant");
    const hide = document.getElementById("hide");
    const body = document.getElementById("body");
    // 触摸开始
    el?.addEventListener("touchstart", (e) => {
      moveObj.start = e?.changedTouches[0].clientY;
    });
    // 滑动过程
    el?.addEventListener("touchmove", (e) => {
      const distance = Math.round(e?.changedTouches[0].clientY - moveObj.start);
      if (distance > 0) {
        hide.style.transform = `translateY(${distance}px)`;
        body.style.transform = `translateY(${distance}px)`;
      }
    });

    // 触摸结束
    el?.addEventListener("touchend", (e) => {
      moveObj.end = e?.changedTouches[0].clientY;
      if (moveObj.end - moveObj.start > 600) {
        hide.style.transform = `translateY(1000px)`;
        body.style.transform = `translateY(1000px)`;
      } else {
        hide.style.transform = "";
        body.style.transform = "";
      }
    });
  });

  return (
    <div
      id="contant"
      style={{
        outline: "1px solid #000",
        position: "relative",
        overflow: "hidden",
        height: "1000px",
      }}
    >
      <div
        id="hide"
        style={{
          position: "absolute",
          height: "1000px",
          top: "-1000px",
          backgroundColor: "red",
          width: "100%",
        }}
      >
        123
      </div>
      <div id="body">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default HomePage;
