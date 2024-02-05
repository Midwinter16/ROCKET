import Intro from "@sbp/com-intro";

const caseMapping = () => ({
  case1: [
    {
      intro: "1",
      position: "bottom",
      hidePrev: true,
      element: document.getElementById("intro1"),
    },
    {
      intro: "2",
      position: "bottom",
      hidePrev: true,
      element: document.getElementById("intro4"),
    },
    {
      intro: "3",
      position: "bottom",
      hidePrev: true,
      element: document.getElementById("intro8"),
    },
  ],
  case2: [
    {
      intro: "1",
      position: "bottom",
      hidePrev: true,
      element: document.getElementById("intro9"),
    },
    {
      intro: "2",
      position: "bottom",
      hidePrev: true,
      element: document.getElementById("intro3"),
    },
    {
      intro: "3",
      position: "bottom",
      hidePrev: true,
      element: document.getElementById("intro6"),
    },
  ],
});

const parseQuery = () => {
  const queryParams = window.location.href.split("?")[1].split("&");
  const params = queryParams.find((item) => item.split("=")[0] === "case");
  return params.split("=")[1];
};

export function intro({ guidances = [], guidanceReady, guidanceShow }) {
  if (
    guidanceReady &&
    !guidanceShow &&
    guidances.some((item) => item.code === "intro" && item.show)
  ) {
    const step = parseQuery();
    const accountDetailOptions = {
      showProgress: true,
      doneLabel: "全部get",
      skipLabel: "跳过教程",
      onComplete: () => {
        console.log("complete");
      },
      onSkip: () => {
        console.log("skip");
      },
      steps: caseMapping()[step],
    };

    const introInstance = new Intro(accountDetailOptions);
    introInstance.start();
  }
}
