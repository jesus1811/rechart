import { Bar, BarChart, PieChart, LineChart, Label, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis, Line, CartesianGrid, Pie, Cell } from "recharts";
import "./App.css";

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: "#fff", padding: "10px", border: "1px solid #ccc" }}>
        <p>{`Date: ${label}`}</p>
        <p>{`Active Users: ${payload[0].value}`}</p>
      </div>
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

  const data2 = [
    { name: "active", value: 120, color: "#4A90E2" },
    { name: "not active", value: 50, color: "red" },
  ];

  const themeDark = false;
  const color = themeDark ? "white" : "black";
  return (
    <main className="w-full    ">
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
      <div className="w-full max-w-[700px] h-[500px] p-5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={200} height={200}>
            <Tooltip content={<CustomTooltip />} />

            <Pie
              data={data2}
              dataKey="value"
              strokeWidth={2} // Grosor de la línea
              innerRadius={"50%"}
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
