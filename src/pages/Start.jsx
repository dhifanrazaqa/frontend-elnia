import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

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
      <section className="flex flex-col items-center justify-center text-center pt-12 px-4">
        <h1 className="text-4xl md:text-5xl">
          <span className="font-bold bg-gradient-to-t from-sky-500 to-sky-800 inline-block text-transparent bg-clip-text">
            Hello!
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
        <Link to={"/risk/soybean"}>
          <div className="flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60 z-50">
            <h3 className="text-xl font-semibold">Soybeans</h3>
          </div>
        </Link>
        <Link to={"/risk/wheat"}>
          <div className="flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <h3 className="text-xl font-semibold">Wheat</h3>
          </div>
        </Link>
        <Link to={"/risk/corn"}>
          <div className="flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <h3 className="text-xl font-semibold">Corn</h3>
          </div>
        </Link>
        <Link to={"/risk/rice"}>
          <div className="flex flex-col justify-center items-center bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <h3 className="text-xl font-semibold">Rice</h3>
          </div>
        </Link>
      </section>
      <div className="border-2 border-neutral-600 w-96 h-96 rounded-3xl fixed -bottom-32 -left-20 z-0"></div>
      <div className="border-2 border-neutral-600 w-96 h-96 rounded-3xl fixed -top-40 -right-72 z-0"></div>
    </div>
  );
}
