import { Bar, BarChart, PieChart, LineChart, Label, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis, Line, CartesianGrid, Pie, Cell } from "recharts";
import "./App.css";
import Chart1 from "./components/Chart1";
import Chart2 from "./components/Chart2";
import { data2 } from "./components/data1";
import Chart3 from "./components/Chart3";

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <>
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
        </div>
      </>
    );
  }
  return null;
};

function App() {
  const data = [
    { date: "6d ago", activeUser: 120, notActive: 50 },
    { date: "5d ago", activeUser: 200, notActive: 50 },
    { date: "3d ago", activeUser: 150, notActive: 50 },
    { date: "2d ago", activeUser: 170, notActive: 50 },
  ];

  const themeDark = true;
  const color = themeDark ? "white" : "black";

  return (
    <main
      className="w-full    bg-black
    "
    >
      <div className="w-full max-w-[700px] h-[500px] p-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} width={200} height={200}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} stroke={color} vertical={false} />
            <XAxis dataKey="date" fill={color}>
              <Label value="Date" position="insideBottom" fill={color} />
            </XAxis>
            <YAxis fill={color}>
              <Label value="Active Users" angle={-90} position="insideLeft" fill={color} />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey={"activeUser"} fill="#8874d8" />
            <Bar dataKey={"notActive"} fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full max-w-[700px] h-[500px] p-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} width={200} height={200}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis dataKey="date">
              <Label value="Date" position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label value="Active Users" angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="activeUser"
              stroke="#4A90E2" // Color azul personalizado
              strokeWidth={2} // Grosor de la línea
              dot={{ stroke: "#4A90E2", strokeWidth: 2, fill: "#4A90E2" }} // Personalización del punto
              name="Active Users"
            />
            {/* Línea con color personalizado (verde) */}
            <Line
              type="monotone"
              dataKey="notActive"
              stroke="#50E3C2" // Color verde personalizado
              strokeWidth={2} // Grosor de la línea
              dot={{ stroke: "#50E3C2", strokeWidth: 2 }} // Personalización del punto
              name="Not Active Users"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Chart1 />
      <Chart2 />
      <Chart3 />
      <div className="w-full max-w-[700px] h-[500px] p-5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={200} height={200}>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              stroke=""
              data={data2}
              dataKey="value"
              strokeWidth={2} // Grosor de la línea
              innerRadius={"75%"}
              outerRadius="100%"
              strokeLinejoin="round"
              activeIndex={1}
              style={{ outline: "none" }}
              //separate
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              // Personalización del punto
              name="Active Users"
            >
              {data2?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default App;
