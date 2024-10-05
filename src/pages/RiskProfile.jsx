import { Link, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import soybean from "../assets/soybean.png";
import { riskProfile } from "@/data/riskProfile";
import React from "react";

export default function RiskProfile() {
  const { crop } = useParams();

  return (
    <div className="min-h-screen bg-background text-white">
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

          <div className="flex-1 h-1 bg-blue-700 mx-2" />

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-blue-700 h-6 w-6">
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
      <section className="px-12 py-4">
        {riskProfile.map((cropProfile, index) => {
          if (cropProfile.crop === crop)
            return (
              <div key={index}>
                <div className="mb-6">
                  <div className="flex flex-row space-x-2">
                    <h1 className="text-xl font-semibold">
                      Risk profiles for{" "}
                      <span className="text-blue-700">{cropProfile.crop}</span>
                    </h1>
                    <img src={soybean} alt="Logo" />
                  </div>
                  <p className="text-sm font-normal">
                    Review our suggested risk profiles for {cropProfile.crop},
                    we will alert you when one of this conditions is forecasted
                  </p>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-neutral-800">
                      <th className="font-normal text-left py-4 px-12">
                        Risk Profile Name
                      </th>
                      <th className="font-normal text-left py-4">Threshold</th>
                      <th className="font-normal text-left py-4">
                        Recommendation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cropProfile.risks.map((risk, idx) => (
                      <React.Fragment key={idx}>
                        <tr className="bg-neutral-700">
                          <td
                            className="font-semibold text-left py-4 px-12"
                            colSpan="3"
                          >
                            {risk.category}
                          </td>
                        </tr>
                        {risk.issues.map((issue, i) => (
                          <tr key={i} className="border-b-2 border-neutral-600">
                            <td className="font-normal text-left py-4 px-20">
                              {issue.description}
                            </td>
                            <td>{issue.threshold}</td>
                            <td>{issue.recommendation}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        })}
      </section>
      <section>
        <div className="flex flex-row justify-end items-center py-4 px-12 space-x-3">
          <p className="text-neutral-500">
            You will be able to edit/create custom risk profiles later in the
            Admin tab
          </p>
          <Link to={"/start"}>
            <button className="border-4 border-blue-700 text-blue-700 px-6 py-2 rounded-lg">
              Back
            </button>
          </Link>
          <Link to={`/risk/${crop}/locations`}>
            <button className="hover:bg-gray-600 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg">
              Continue &gt;&gt;
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
