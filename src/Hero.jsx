import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import four from './four.jpg';
import five from './five.jpg';
import sea from './sea.jpeg';
import AboutSlider from './AboutSlider';

const Hero = () => {
  return (
    <div className="mt-20">
      <ul className="container m-auto p-4 lg:p-2 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 gap-3">
        <li className="col-span-1 row-span-3 rounded-2xl p-4 bg-sky-600 flex flex-col items-center gap-4">
          <h1 className="text-5xl text-white font-medium">GEHMY MARINE</h1>
          <h2 className="text-white">MARINE ENGINEERING AND CONSTRUCTION</h2>
          <p className="px-2 py-1 rounded-full text-sm text-sky-700 bg-sky-200">
            Innovating for a World That Lasts
          </p>
          <AboutSlider />
        </li>
        <li className="col-span-1 row-span-5 rounded-2xl overflow-hidden">
          <img src={sea} alt="" className="object-cover h-full" />
        </li>
        <li className="col-span-1 row-span-2 rounded-2xl p-4 flex flex-col gap-4">
          <p className="px-2 py-1 rounded-full w-fit text-sm text-sky-600 border-2 border-sky-600 ">
            Clients across industries
          </p>
          <div className="w-full relative overflow-hidden">
            <div className="flex justify-between w-[200%] slider">
              <img src={one} alt="" />
              <img src={two} alt="" />
              <img src={three} alt="" />
              <img src={four} alt="" />
              <img src={five} alt="" />
              <img src={one} alt="" />
              <img src={two} alt="" />
              <img src={three} alt="" />
              <img src={four} alt="" />
              <img src={five} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Hero