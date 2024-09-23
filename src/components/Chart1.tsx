import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { data } from "./data1";

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

export function Chart1() {
  return (
    <div className="w-full max-w-[700px] h-[400px] p-5">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} width={200} height={200}>
          <Legend
            verticalAlign="top"
            content={({ payload }) => {
              return (
                <div className="flex flex-wrap justify-end mt-4 w-full items-center  mb-3">
                  {payload?.map((item) => (
                    <li className="group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded px-2 py-1 transition cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                      <span className="h-[3px] w-3.5 shrink-0 rounded-full  opacity-100" aria-hidden="true" style={{ background: item.color }} />
                      <p className="truncate whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-50 opacity-100">{item.value}</p>
                    </li>
                  ))}
                </div>
              );
            }}
          />
          <CartesianGrid horizontal={true} vertical={false} className="stroke-gray-200 stroke-1 dark:stroke-gray-800" />
          <defs>
            <linearGradient id="userActive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4A90E2" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#4A90E2" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="notActive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#50E3C2" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#50E3C2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis axisLine={false} tickLine={false} className="text-xs" tickFormatter={(value) => `${value}`} dataKey="date"></XAxis>
          <YAxis axisLine={false} tickLine={false} className="text-xs" tickFormatter={(value) => `$ ${value}`} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="linear"
            dataKey="SolarPanels"
            stroke="#4A90E2" // Color azul personalizado
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeOpacity={1}
            dot={{ display: "none" }}
            // Personalización del punto
            name="SolarPanels"
            fillOpacity={1}
            fill="url(#userActive)"
          />

          <Area
            type="linear"
            dataKey="Inverters"
            stroke="#50E3C2" // Color azul personalizado
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeOpacity={1}
            dot={{ stroke: "#50E3C2", strokeWidth: 2, fill: "#50E3C2", display: "none" }} // Personalización del punto
            name="Inverters"
            fillOpacity={1}
            fill="url(#notActive)"
          />

          {/* Línea con color personalizado (verde) */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart1;
