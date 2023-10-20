import icons from "@/assets/icons";
import { useModel } from "@umijs/max";
import { delay, floor, map } from "lodash";
import { useState } from "react";
import { nameMapping } from "./constants";

const Performance = () => {
  const { data } = useModel("performance");
  const [loading, setLoading] = useState(true);
  delay(() => setLoading(false), 3000);
  return (
    <div>
      <img src={icons.active.androidAcitive} alt="" />
      {/* {!loading && <div>123123123</div>} */}
      <div>
        {map(data, (value, key) => {
          return (
            <div>
              <span>
                {nameMapping[key]} - {floor(value, 3)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Performance;
