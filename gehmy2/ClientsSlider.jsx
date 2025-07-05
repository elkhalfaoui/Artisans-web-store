import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const ClientsSlider = () => {
 
  return (
    <div className="relative overflow-hidden w-full h-36">
      <ul id="slider" className="w-[300%] h-full flex absolute duration-1000 ">
        <li className="h-full w-1/3">
          <p className="text-white text-center text-sm">
            At Gemhy Marine, we specialize in the design and execution of
            seawater intake systems for desalination plants, providing
            innovative maritime solutions driven by marine ingenuity. Our
            expertise ensures efficient, sustainable, and high-performance
            infrastructure, creating lasting value for our clients.
          </p>
        </li>
        <li className="h-full w-1/3">
          <p className="text-white text-center text-sm">
            We offer integrated offshore solutions, delivering a comprehensive
            range of services, including diving operations, hydrographic and
            geophysical surveys, and specialized marine services. With a highly
            skilled team and cutting-edge technology, we execute every project
            with precision, adhering to the highest standards of quality,
            safety, and efficiency.
          </p>
        </li>
        <li className="h-full w-1/3">
          <p className="text-white text-center text-sm">
            Our commitment to excellence extends beyond technical expertise. We
            prioritize safety, regulatory compliance, and environmental
            responsibility in all our operations. Whether supporting
            desalination infrastructure, conducting underwater inspections, or
            facilitating offshore logistics, we deliver tailored solutions that
            optimize performance and cost-effectiveness.
          </p>
        </li>
      </ul>
      <ul className="absolute flex gap-2 bottom-4 left-[50%] -translate-x-1/2">
        <li>
          <input
            type="radio"
            name="slider"
            id="0"
            className="cursor-pointer w-2.5 bg-sky-600"
            onClick={() => setSlider(0)}
          />
        </li>
        <li>
          <input
            type="radio"
            name="slider"
            id="1"
            className="cursor-pointer w-2.5 bg-sky-600"
            onClick={() => setSlider(100)}
          />
        </li>
        <li>
          <input
            type="radio"
            name="slider"
            id="2"
            className="cursor-pointer w-2.5 bg-sky-600"
            onClick={() => setSlider(200)}
          />
        </li>
      </ul>
    </div>
  );
};
export default ClientsSlider;
