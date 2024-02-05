export const getData = async () => {
  try {
    const data = await fetch(
      "https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json",
      {
        method: "GET",
      },
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log(err);
  }
};
