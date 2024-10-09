/* eslint-disable react/prop-types */
import generate from "../../assets/generate.png";

export default function GeneratedRecommend({ setVisible }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-white">
      <div className="bg-background shadow-lg max-w-7xl w-full z-60 rounded-2xl">
        <div className="flex justify-between bg-stone-800 px-6 py-3 rounded-t-2xl">
          <div className="flex gap-3">
            <img src={generate} alt="generate" />
            <h2 className="text-md font-semibold">Generate Insight</h2>
          </div>
          <button
            className="text-white rounded font-bold"
            onClick={() => setVisible(false)}
          >
            X
          </button>
        </div>
        <div className="px-6 py-2">
          <div className="flex justify-end"></div>
        </div>
      </div>
    </div>
  );
}
