import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

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
            Climate
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
          <button className="mt-8 hover:bg-gray-600 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg">
            Let’s get started!
          </button>
        </Link>
      </section>

      {/* Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-40 px-96 py-8 items-center justify-center">
        <div className="flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-2xl w-96">
          <h3 className="text-xl font-semibold">Enso Forecasting</h3>
          <p className="mt-2 text-neutral-500 text-center">
            Provides real-time climate predictions based on data to detect
            potential occurrences of El Niño or La Niña.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-2xl w-96">
          <h3 className="text-xl font-semibold">Yield Optimizer</h3>
          <p className="mt-2 text-neutral-500 text-center">
            Optimizes crop yield through climate analysis and resource
            allocation for informed farming decisions.
          </p>
        </div>
      </section>
      <div className="border-2 border-neutral-600 w-96 h-96 rounded-3xl fixed -bottom-12 -left-20"></div>
      <div className="border-2 border-neutral-600 w-96 h-96 rounded-3xl fixed -top-40 -right-72 z-0"></div>
    </div>
  );
}
