import React from "react";

function InfoCard({
  title,
  children: icon,
  suhu,
  angin,
  kelembaban,
  nh,
  block,
}) {
  if (block) {
    return (
      <div className="p-0 m-0 bg-white rounded-md shadow-lg dark:bg-gray-700">
        <div className="w-full p-4 m-0 rounded-md">
          {icon}
          <div className="w-full ">
            <p className="mb-2 font-medium text-center text-gray-700 text-md dark:text-gray-200">
              {title}
            </p>
            <div className="flex justify-between">
              <div className="flex justify-center w-1/2">
                <div className="flex flex-col items-start justify-center mb-2">
                  <p className="mb-3 text-lg font-normal text-left text-gray-700 dark:text-gray-200">
                    Suhu <br /> <span className="font-bold">{suhu || "-"}°C</span>
                  </p>
                  <p className="text-lg font-normal text-left text-gray-700 dark:text-gray-200">
                    Kecepatan Angin <br />{" "}
                    <span className="font-bold">{angin || "-"}m/s</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-1/2">
                <div className="flex flex-col items-start justify-center mb-2">
                  <p className="mb-3 text-lg font-normal text-left text-gray-700 dark:text-gray-200">
                    Kelembapan <br />{" "}
                    <span className="font-bold">{kelembaban || "-"}%</span>
                  </p>
                  <p className="text-lg font-normal text-left text-gray-700 dark:text-gray-200">
                    NH3 <br /> <span className="font-bold">{nh || "-"}ppm</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-0 m-0 bg-white rounded-md shadow-lg dark:bg-gray-700">
      <div className="flex items-center w-full p-4 m-0 rounded-md">
        {icon}
        <div className="w-full ">
          <p className="mb-2 font-medium text-gray-700 text-md dark:text-gray-200">
            {title}
          </p>
          <div className="flex justify-between mb-2">
            <p className="flex-1 mr-5 text-sm font-normal text-gray-700 dark:text-gray-200">
              Suhu <br /> <span className="font-bold">{suhu}°C</span>
            </p>
            <p className="flex-1 text-sm font-normal text-right text-gray-700 dark:text-gray-200">
              Angin <br /> <span className="font-bold">{angin}m/s</span>
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="flex-1 mr-5 text-sm font-normal text-gray-700 dark:text-gray-200">
              Kelembapan <br /> <span className="font-bold">{kelembaban}%</span>
            </p>
            <p className="flex-1 text-sm font-normal text-right text-gray-700 dark:text-gray-200">
              NH3 <br /> <span className="font-bold">{nh}ppm</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
