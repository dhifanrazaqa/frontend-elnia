/* eslint-disable react/prop-types */
const WaterCard = ({ title, logo, value }) => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-neutral-500 rounded-lg p-2 w-32 text-white">
      <div className="flex justify-center items-center mb-4 gap-1">
        <div className="border-2 border-neutral-500 rounded-md">
          <img src={logo} alt={title} className="w-6" />
        </div>
        <div>
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-xs text-neutral-400">{value}%</p>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default WaterCard;
