import logo from "@/assets/logo.png";

import warm from "@/assets/warm.png";
import supply from "@/assets/supply.png";
import potential from "@/assets/potential.png";
import oxygen from "@/assets/oxygen.png";
import moisture from "@/assets/moisture.png";
import polarity from "@/assets/polarity.png";
import generate from "@/assets/generate.png";

import dropdown from "@/assets/dropdown.png";
import warning from "@/assets/warning.png";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
} from "react-leaflet";
import SelectionComponent from "@/components/molecule/selectMode";
import CropDistribution from "@/components/molecule/cropDistribution";
import WaterCard from "@/components/molecule/waterCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function EnsoForecasting() {
  const location = useLocation();
  const userData = location.state;
  console.log(userData);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMode, setselectedMode] = useState("temp");
  const [currentData, setCurrentData] = useState(userData[0]);
  const [crop, setCrop] = useState(userData[0].crop);

  const [position, setPosition] = useState([currentData.lat, currentData.lng]);
  const radius = 10000;

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 150, 300, 250, 400, 350],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
        segment: {
          borderColor: function (context) {
            const index = context.p0DataIndex;
            const label = context.chart.data.labels[index];

            if (
              label === "April" ||
              index > context.chart.data.labels.indexOf("April")
            ) {
              return "blue";
            }
            return "green";
          },
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleLocationChange = (e) => {
    const { value } = e.target;
    console.log(value);
    const targetLocation = userData.find(
      (data) => data.region === value.split(" ")[1]
    );

    setCurrentData(targetLocation);
    setPosition([targetLocation.lat, targetLocation.lng]);
  };

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
      <header className="flex justify-between items-center py-3 px-6 bg-background">
        <Link to={"/"}>
          <div className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-40" />
          </div>
        </Link>
      </header>
      <div className="bg-neutral-600 w-full h-0.5" />
      <div className="grid grid-cols-12 gap-6">
        <div className="flex flex-col bg-neutral-800 gap-6 col-span-2 p-8">
          <Link to={"/dashboard/enso-forecasting"} state={userData}>
            <div className="rounded-md border-2 border-neutral-600 px-2 py-1 text-center shadow-3xl">
              Enso Forecasting
            </div>
          </Link>
          <Link to={"/dashboard/yield-optimizer"} state={userData}>
            <div className="rounded-md border-2 border-neutral-600 px-2 py-1 text-center shadow-2xl">
              CC - Fusion
            </div>
          </Link>
        </div>
        {/* Main */}
        <div className="col-span-6">
          {/* filter */}
          <div className="flex gap-3 mt-4">
            <div className="relative w-48 lg:max-w-sm">
              <select
                className="w-full p-2.5 rounded-xl text-white bg-stone-500 border border-stone-500 shadow-sm outline-none appearance-none focus:border-stone-300"
                onChange={handleLocationChange}
              >
                {userData.map((data) => (
                  <option key={data.region}>Indonesia, {data.region}</option>
                ))}
              </select>
              <img
                src={dropdown}
                alt="dropdown"
                className="absolute right-3 top-5 w-3"
              />
            </div>
            <div className="p-2.5 rounded-xl bg-stone-500">{crop}</div>
            <SelectionComponent
              selectedMode={selectedMode}
              setSelectedMode={setselectedMode}
            />
          </div>

          <div className="py-8 rounded-lg">
            {/* Alert Distribution */}
            <div className="flex justify-between items-center gap-4 mb-4">
              {/* alert */}
              <div className="w-96 h-36 border-2 border-neutral-500 p-4 rounded-xl">
                <h3 className="text-lg">Alert Distribution</h3>
                <div className="flex justify-between">
                  <span className="text-blue-400">72%</span>
                  <span className="text-gray-400">28%</span>
                </div>
                <div className="w-full bg-neutral-500">
                  <div
                    className="bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none h-2"
                    style={{ width: `${72}%` }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span>Critical alerts</span>
                  <span>Alerts</span>
                </div>
              </div>

              {/* countdown */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col justify-center items-center w-96 h-16 border-2 border-neutral-500 rounded-xl">
                  <div>
                    <p>El Nino</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex justify-center items-center rounded-xl bg-stone-500 w-20 h-8">
                      <p className="text-xs">91 Days</p>
                    </div>
                    <div className="flex justify-center items-center rounded-xl bg-stone-500 w-20 h-8">
                      <p className="text-xs">2 Hours</p>
                    </div>
                    <div className="flex justify-center items-center rounded-xl bg-stone-500 w-20 h-8">
                      <p className="text-xs">91 Minute</p>
                    </div>
                    <div className="flex justify-center items-center rounded-xl bg-stone-500 w-20 h-8">
                      <p className="text-xs">91 Second</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-96 h-16 border-2 border-neutral-500 rounded-xl">
                  <p>La Niña</p>
                  <div className="flex gap-3">
                    <div className="flex justify-center items-center rounded-xl bg-stone-500 w-20 h-8">
                      <p className="text-xs">91 Days</p>
                    </div>
                    <div className="flex justify-center items-center rounded-xl bg-stone-500 w-20 h-8">
                      <p className="text-xs">2 Hours</p>
                    </div>
                    <div className="flex justify-center items-center rounded-xl bg-stone-500 w-20 h-8">
                      <p className="text-xs">91 Minute</p>
                    </div>
                    <div className="flex justify-center items-center rounded-xl bg-stone-500 w-20 h-8">
                      <p className="text-xs">91 Second</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex"></div>
            </div>
            <div className="h-64 bg-gray-700 rounded-lg">
              {selectedMode !== "growth" ? (
                <div className="w-full h-72">
                  <MapContainer
                    center={position}
                    zoom={10}
                    scrollWheelZoom={false}
                    className="w-full h-full"
                  >
                    <TileLayer
                      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                      <Popup>
                        Koordinat: {position[0]}, {position[1]}
                      </Popup>
                    </Marker>
                    <Circle
                      center={position}
                      radius={radius}
                      pathOptions={{
                        color: "red",
                        fillColor: "red",
                        fillOpacity: 0.5,
                      }}
                    />
                  </MapContainer>
                </div>
              ) : (
                <div className="flex justify-center w-full h-72">
                  <CropDistribution crop={crop} />
                </div>
              )}
            </div>
          </div>

          <div className="flex">
            <div className="flex w-96 text-black mt-6">
              <input
                type="date"
                onChange={handleDateChange}
                className="border p-2 rounded-md bg-blue-700 border-blue-700 text-white"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-4 pr-6">
          <div className="flex justify-end my-6 gap-2">
            <button className="flex gap-2 border-4 font-bold border-sky-600 p-3 rounded-lg">
              <img src={generate} />
              Generate Insight
            </button>
            <button className="font-bold bg-blue-600 p-3 rounded-lg">
              PDF Full Report
            </button>
          </div>
          <div className="border-2 border-neutral-500 p-6 rounded-lg">
            <div className="flex gap-3">
              <img src={warning} alt="research" />
              <h3 className="text-lg">Critical alert breakdown by location</h3>
            </div>
            <div className="bg-gray-700 rounded-lg">
              <div className="bg-white shadow-md rounded-lg p-6">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-2 border-neutral-500 p-6 rounded-lg mt-4 gap-2">
            <WaterCard title={"Warm Water"} logo={warm} value={70}></WaterCard>
            <WaterCard title={"Supply"} logo={supply} value={70}></WaterCard>
            <WaterCard
              title={"Potential Supply"}
              logo={potential}
              value={70}
            ></WaterCard>
            <WaterCard title={"Oxygen"} logo={oxygen} value={70}></WaterCard>
            <WaterCard
              title={"Moisture"}
              logo={moisture}
              value={70}
            ></WaterCard>
            <WaterCard
              title={"Polarity"}
              logo={polarity}
              value={70}
            ></WaterCard>
          </div>
        </div>
      </div>
    </div>
  );
}
