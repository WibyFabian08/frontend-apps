import React from "react";
import formatDate from "../../utils/formatDate";

const BLogCard = ({ data }) => {
  return (
    <div className="px-5 mb-10 lg:w-1/3 md:w-1/2" data-aos="fade-right">
      <div className="flex flex-col w-full rounded-lg shadow-lg bg-primary-100">
        <div className="w-full h-48 overflow-hidden">
          <img
            src={data.thumbnail}
            className="object-cover w-full h-full"
            alt="blog image"
          />
        </div>
        <div className="p-2">
          <p className="text-xs text-left text-primary-300">
            {formatDate(new Date(data.pubDate))}
          </p>

          <p className="mt-2 text-sm font-semibold text-left text-primary-400">
            <a href={data.link} target="_blank">
              {data.title}
            </a>
          </p>

          <div dangerouslySetInnerHTML={{__html: data.description}} className="mt-2 text-xs text-left text-primary-300">
            {/* {data.description} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLogCard;
