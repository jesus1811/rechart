import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, TooltipProps } from "recharts";

import { data2 } from "./data1";
import { useState } from "react";

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <>
        <div className="w-60 rounded-md border border-gray-500/10  bg-blue-500 px-4 py-1.5 text-sm shadow-md dark:border-gray-400/20 dark:bg-gray-900">
          <p className="flex items-center justify-between">
            <span className="text-gray-50 dark:text-gray-50">Date</span>
            <span className="font-medium text-gray-50 dark:text-gray-50">{label}</span>
          </p>
        </div>
        <div className="mt-1 w-60 space-y-1 rounded-md border border-gray-500/10  bg-white px-4 py-2 text-sm shadow-md dark:border-gray-400/20 dark:bg-gray-900">
          <div className="flex items-center space-x-2.5">
            <span className={"size-2.5 shrink-0 rounded-sm"} style={{ background: "red" }} aria-hidden={true} />
            <div className="flex w-full justify-between">
              <span className=" text-gray-700 dark:text-gray-300">status</span>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-gray-900 dark:text-gray-50">value</span>
                <span className="text-gray-500 dark:text-gray-500">procentaje</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <span className={"size-2.5 shrink-0 rounded-sm"} style={{ background: "red" }} aria-hidden={true} />
            <div className="flex w-full justify-between">
              <span className=" text-gray-700 dark:text-gray-300">status</span>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-gray-900 dark:text-gray-50">value</span>
                <span className="text-gray-500 dark:text-gray-500">procentaje</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
};

function Chart3() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const handleShapeClick = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
    index: number,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();

    if (activeIndex === index) {
      setActiveIndex(undefined);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full max-w-[350px] h-[400px] p-5">
      <h1 className="text-white">{activeIndex}</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <text className="fill-gray-700 dark:fill-gray-300 text-2xl" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            ${" "}
            {data2?.reduce((prev, next) => {
              return prev + next.value;
            }, 0)}
          </text>

          <Tooltip content={<CustomTooltip />} />
          <Pie
            stroke=""
            data={data2}
            dataKey="value"
            strokeWidth={2} // Grosor de la línea
            innerRadius={"75%"}
            outerRadius="100%"
            strokeLinejoin="round"
            activeIndex={activeIndex}
            style={{ outline: "none" }}
            //separate
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            onClick={handleShapeClick}
            // Personalización del punto
            name="Active Users"
          >
            {data2?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry?.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart3;
