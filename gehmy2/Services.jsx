import { useEffect, useState } from 'react';
import service1 from './service1.png';
import service2 from './service2.png';
import service3 from './service3.png';
import service4 from './service4.jpg';
import service5 from './service5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    document.getElementById('services').style.left = slide + '%';
  }, [slide]);

  return (
    <div className="mt-24">
      <div className="container m-auto px-4 lg:px-0 relative">
        <h2 className="relative p-2 text-3xl font-medium w-fit mb-12 border-b-2 border-sky-600 after:bg-white after:absolute after:left-1/2 after:-bottom-2 after:rounded-full after:w-4 after:h-4 after:border-2 after:border-sky-600">
          Services
        </h2>
        {scrollLeft ? (
          <span
            className="absolute z-20 left-8 top-[25%] opacity-80 py-2 px-4 rounded-full cursor-pointer bg-zinc-100  border border-zinc-200  text-sky-600"
            onClick={() => {
              if (slide < -20) {
                setSlide(slide + 60);
                setScrollRight(true);
              } else if (slide == -20) {
                setSlide(0);
                setScrollLeft(false);
              }
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
        ) : (
          ''
        )}
        {scrollRight ? (
          <span
            className="absolute z-20 right-8 top-[25%] opacity-80 py-2 px-4 rounded-full cursor-pointer bg-zinc-100  border border-zinc-200 -700 text-sky-600"
            onClick={() => {
              if (slide > -180) {
                setSlide(slide - 60);
                setScrollLeft(true);
              } else if (slide == -180) {
                setSlide(-200);
                setScrollRight(false);
              }
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        ) : (
          ''
        )}
        <div className="w-full overflow-hidden relative h-[500px] lg:h-[500px]">
          <ul
            className="absolute w-[300%] flex gap-3 duration-300"
            id="services"
          >
            <li className="w-3/5 flex flex-col gap-3">
              <img
                src={service1}
                alt=""
                className="w-full aspect-video bg-cover bg-center rounded-2xl"
              />
              <h3 className="text-2xl">Intake For Desilination Plants</h3>
              <p>
                Desalination intake systems transport seawater to a plant for
                purification, removing salt and contaminants. They vary in
                diameter and length based on capacity and environmental needs.
                Efficient design ensures optimal flow, durability, and minimal
                impact on marine life.
              </p>
            </li>
            <li className="w-3/5 flex flex-col gap-3">
              <img
                src={service2}
                alt=""
                className="w-full aspect-video bg-cover bg-center  rounded-2xl"
              />
              <h3 className="text-2xl">Marine Services</h3>
              <p>
                Gemhy’s skilled crews and well-maintained fleet provide reliable
                marine services, tailored to your project’s needs. With
                expertise and efficiency, we ensure safe, high-quality
                operations for diverse maritime requirements.
              </p>
            </li>
            <li className="w-3/5 flex flex-col gap-3">
              <img
                src={service3}
                alt=""
                className="w-full aspect-video bg-cover bg-center rounded-2xl"
              />
              <h3 className="text-2xl">Diving Services</h3>
              <p>
                Providing expert diving services for oil & gas and marine civil
                construction, ensuring safety, efficiency, and precision in
                every project. Our skilled divers and advanced equipment deliver
                reliable underwater solutions.
              </p>
            </li>
            <li className="w-3/5 flex flex-col gap-3">
              <img
                src={service4}
                alt=""
                className="w-full aspect-video bg-cover bg-center  rounded-2xl"
              />
              <h3 className="text-2xl">Rov Services </h3>
              <p>
                Gemhy provides advanced ROV services for inspection, monitoring,
                and underwater support, ensuring efficiency, safety, and
                precision in every operation. Our cutting-edge technology
                delivers reliable solutions for diverse marine projects.
              </p>
            </li>
            <li className="w-3/5 flex flex-col gap-3">
              <img
                src={service5}
                alt=""
                className="w-full aspect-video bg-cover bg-center  rounded-2xl"
              />
              <h3 className="text-2xl">Oil And Gas Services</h3>
              <p>
                Offering expert oil and gas services, including SPM, rigs,
                subsea pipelines, and platforms. We ensure safe, efficient, and
                reliable operations with advanced technology and skilled
                professionals for optimal project performance.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Services;
