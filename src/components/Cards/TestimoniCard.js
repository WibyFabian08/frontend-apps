import React from "react"

import { StarIcon } from "../../assets/icons"
import { Profile } from "../../assets/images"

const TestimoniCard = () => {
    return (
        <div
          className="w-full h-full px-5 mb-5 lg:w-2/5 md:w-1/2"
          data-aos="fade-right"
          // data-aos-duration={duration}
        >
          <div className="flex items-center p-5 rounded-lg shadow-lg bg-primary-100">
            <div>
              <div className="w-20 h-20 mr-5 overflow-hidden text-white bg-white rounded-full">
                <img
                  src={Profile}
                  alt="profile image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h5 className="text-xl font-semibold text-left text-primary-400">
                Lorem ipsum dolor{" "} <br />
              </h5>
              <p className="text-xs text-left text-primary-300">
                Rektor Universitas Gajah Mada
              </p>
              <p className="mt-2 text-sm text-left text-primary-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aut id, distinctio qui saepe debitis,
              </p>
              <div className="flex items-center mt-1">
                <img src={StarIcon} alt="" width={25} />
                <img src={StarIcon} alt="" width={25} />
                <img src={StarIcon} alt="" width={25} />
                <img src={StarIcon} alt="" width={25} />
                <img src={StarIcon} alt="" width={25} />
              </div>
            </div>
          </div>
        </div>
    )
}

export default TestimoniCard