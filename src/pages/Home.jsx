import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import circle4 from "../assets/circle4.png";
import ensobg from "../assets/ensoforbg.png";
import windHome from "../assets/wind-home.png";
import ccfusionbg from "../assets/ccfusionbg.png";
import tractorHome from "../assets/tractor-home.png";
import waterbg from "../assets/waterbg.png";
import waterHome from "../assets/waTer-home.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-background">
        <div className="text-xl font-bold">
          <img src={logo} alt="Logo" className="w-40" />
        </div>
        <nav className="space-x-8">
          <a href="#about" className="text-neutral-400 hover:text-blue-400">
            About Us
          </a>
          <a href="#services" className="text-neutral-400 hover:text-blue-400">
            Services
          </a>
          <a
            href="#case-studies"
            className="text-neutral-400 hover:text-blue-400"
          >
            Case Studies
          </a>
          <a
            href="#how-it-works"
            className="text-neutral-400 hover:text-blue-400"
          >
            How it Works
          </a>
          <a href="#team" className="text-neutral-400 hover:text-blue-400">
            Meet the Team
          </a>
        </nav>
        <a
          href="/register"
          className="bg-white text-black px-4 py-2 rounded-md z-40"
        >
          Register Here
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl">
          Clear{" "}
          <span className="font-bold bg-gradient-to-t from-sky-500 to-sky-800 inline-block text-transparent bg-clip-text">
            Solution
          </span>{" "}
          for a<br />
          <span className="font-bold">Complex</span>{" "}
          <span className="font-bold bg-gradient-to-t from-sky-500 to-sky-800 inline-block text-transparent bg-clip-text font-bold3">
            Agriculture
          </span>{" "}
          Condition
        </h1>
        <p className="mt-4 text-lg md:text-lg max-w-5xl text-neutral-500">
          Empower your farming decisions with AI-driven insights on El Niño and
          La Niña. Maximize crop yield, safeguard water resources, and adapt to
          shifting climate conditions with precision forecasts tailored to your
          region and farm needs.
        </p>
        <Link to={"/start"}>
          <button className="mt-8 hover:bg-gray-600 bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-sm">
            Let’s get started!
          </button>
        </Link>
      </section>

      {/* Feature Section */}
      <section className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-24 px-64 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-white rounded-lg shadow-2xl w-72">
          <div className="flex flex-col gap-2 justify-center items-center z-50">
            <h3 className="text-md text-center font-semibold z-50">
              Enso Forecasting
            </h3>
            <img src={windHome} alt="Logo" className="w-10 z-0" />
            <p className="text-xs text-white text-center z-50">
              Provides real-time climate predictions based on data to detect
              potential occurrences of El Niño or La Niña.
            </p>
            <Link to={"/start"}>
              <button className="font-bold text-black rounded-md px-7 py-1 bg-white">
                Explore More
              </button>
            </Link>
          </div>
          <img
            src={ensobg}
            alt="Logo"
            className="absolute w-96 h-52 object-cover z-0"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-white rounded-lg shadow-2xl w-72">
          <div className="flex flex-col gap-2 justify-center items-center z-50">
            <h3 className="text-md text-center font-semibold z-50">
              Yield Optimizer
            </h3>
            <img src={tractorHome} alt="Logo" className="w-10 z-0" />
            <p className="text-xs text-white text-center z-50">
              Optimizes crop yield through climate analysis and resource
              allocation for informed farming decisions.
            </p>
            <Link to={"/start"}>
              <button className="font-bold text-black rounded-md px-7 py-1 bg-white">
                Explore More
              </button>
            </Link>
          </div>
          <img
            src={ccfusionbg}
            alt="Logo"
            className="absolute w-96 h-52 object-cover z-0"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-white rounded-lg shadow-2xl w-72">
          <div className="flex flex-col gap-2 justify-center items-center z-50">
            <h3 className="text-md text-center font-semibold z-50">
              Water Management
            </h3>
            <img src={waterHome} alt="Logo" className="w-10 z-0" />
            <p className="text-xs text-white text-center z-50">
              Farmers can minimize water wastage while ensuring their crops get
              the optimal amount of water for growth.
            </p>
            <Link to={"/start"}>
              <button className="font-bold text-black rounded-md px-7 py-1 bg-white">
                Explore More
              </button>
            </Link>
          </div>
          <img
            src={waterbg}
            alt="Logo"
            className="absolute w-96 h-52 object-cover z-0"
          />
        </div>
      </section>
      <img src={circle1} alt="Circle 1" className="absolute top-1/3 left-20" />
      <img src={circle2} alt="Circle 2" className="absolute top-1/2 left-40" />
      <img src={circle4} alt="Circle 3" className="absolute top-1/3 right-20" />
      <img src={circle3} alt="Circle 4" className="absolute top-1/2 right-40" />
    </div>
  );
}
