/* eslint-disable react/prop-types */
const WaterCard = ({ title, logo, value }) => {
  return (
    <div className="border-2 border-neutral-500 rounded-lg p-2 w-32 text-white">
      <div className="flex items-center mb-4 gap-1">
        <img src={logo} alt={title} className="w-6" />
        <div>
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-xs text-neutral-400">{value}%</p>
        </div>
      </div>
      <div className="relative pt-2">
        <div className="h-2 bg-gray-500 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WaterCard;
