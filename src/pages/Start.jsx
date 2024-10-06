import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import soybean from "../assets/soybean.png";
import corn from "../assets/corn.png";
import rice from "../assets/rice.png";
import wheat from "../assets/wheat.png";

export default function Start() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-background">
        <Link to={"/"}>
          <div className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-40" />
          </div>
        </Link>
        <div className="flex items-center w-1/2 h-16">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-blue-700 h-6 w-6">
              <div className="rounded-full bg-white h-4 w-4" />
            </div>
            <p className="font-bold">Assets</p>
          </div>

          <div className="flex-1 h-1 bg-gray-400 mx-2" />

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-gray-400 h-6 w-6">
              <div className="rounded-full bg-white h-4 w-4" />
            </div>
            <p className="font-bold text-white">Risk Profiles</p>
          </div>

          <div className="flex-1 h-1 bg-gray-400 mx-2" />

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-gray-400 h-6 w-6">
              <div className="rounded-full bg-white h-4 w-4" />
            </div>
            <p className="font-bold text-gray-400">Locations</p>
          </div>
        </div>
        <div></div>
      </header>
      <div className="bg-neutral-600 w-full h-0.5" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-12 px-4">
        <h1 className="text-4xl md:text-5xl">
          <span className="font-bold bg-gradient-to-t from-sky-500 to-sky-800 inline-block text-transparent bg-clip-text">
            Welcome!
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-lg max-w-3xl text-white">
          {
            "Let's get started by setting up your account with the crops you're managing. Please select your primary crops below, and tailor configurations to meet your specific needs."
          }
        </p>
      </section>
      {/* Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 px-36 py-24 items-center justify-center">
        <Link to={"/risk/Soybean"}>
          <div className="z-50 flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <img src={soybean} alt="" className="w-10" />
            <h3 className="text-xl font-semibold z-50">Soybeans</h3>
          </div>
        </Link>
        <Link to={"/risk/Wheat"}>
          <div className="flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <img src={wheat} alt="" className="w-10" />
            <h3 className="text-xl font-semibold">Wheat</h3>
          </div>
        </Link>
        <Link to={"/risk/Corn"}>
          <div className="flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <img src={corn} alt="" className="w-10" />
            <h3 className="text-xl font-semibold">Corn</h3>
          </div>
        </Link>
        <Link to={"/risk/Rice"}>
          <div className="flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <img src={rice} alt="" className="w-10" />
            <h3 className="text-xl font-semibold">Rice</h3>
          </div>
        </Link>
      </section>
      <div className="border-2 border-neutral-600 w-96 h-96 rounded-3xl fixed -bottom-48 -left-20 z-0"></div>
      <div className="border-2 border-neutral-600 w-96 h-96 rounded-3xl fixed -top-40 -right-72 z-0"></div>
    </div>
  );
}
