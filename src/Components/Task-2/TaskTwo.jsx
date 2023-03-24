import {StatisticList} from "./Statistic/StatisticList";
import data from "../../path/data.json";

export const TaskTwo = () => {
  return (
    <div>
      <StatisticList items={data} />
    </div>
  );
};
