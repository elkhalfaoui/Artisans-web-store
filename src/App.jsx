import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import hero from "./assets/hero.png";
import desk from "./assets/desk.webp";
import bed from "./assets/bed.webp";
import door from "./assets/door.jpg";
import biblio from "./assets/biblio.jpg";
import { useEffect, useState } from "react";

const App = () => {
    const [slider, setSlider] = useState(0);
    useEffect(() => {
        document.getElementById("slider").style.left = "-" + slider + "%";
        document.getElementById(`${slider / 100}`).checked = true;
        const timer = setTimeout(() => {
            if (slider < 400) {
                setSlider(slider + 100);
            } else {
                setSlider(0);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [slider]);

    return (
        <div>
            <Header />
            <div>
                <ul className="container m-auto mt-38 grid grid-cols-1 md:grid-cols-5 items-center gap-y-12 px-4 text-zinc-600">
                    <li className="col-span-2 flex flex-col items-start gap-10 order-2 md:order-1">
                        <div className="w-16 h-0.75 bg-orange-500"></div>
                        <p className="font-medium">Best Quality Products</p>
                        <h1 className="text-4xl lg:text-5xl font-medium leading-normal">
                            Turning Wood
                            <br />
                            into Living Art.
                        </h1>
                        <p>Your dream home furnishing journey starts here.</p>
                        <button className="flex gap-2 items-center py-2 px-6 border-2 cursor-pointer text-purple-700 border-purple-700 rounded-4xl hover:bg-purple-600 hover:text-white">
                            <span>GET STARTED</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </li>
                    <li className="col-span-3 relative rounded-2xl overflow-hidden aspect-[16/9] order-1 md:order-2">
                        <span
                            className="absolute left-4 top-[50%] bg-zinc-300 px-1.5 rounded-4xl z-20 cursor-pointer text-purple-700"
                            onClick={() => {
                                if (slider > 0) {
                                    setSlider(slider - 100);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </span>
                        <span
                            className="absolute right-4 top-[50%] bg-zinc-300 px-1.5 rounded-4xl z-20 cursor-pointer text-purple-700"
                            onClick={() => {
                                if (slider < 400) {
                                    setSlider(slider + 100);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                        <ul
                            id="slider"
                            className="w-[500%] h-full flex absolute duration-1000 "
                        >
                            <li className="h-full w-1/5">
                                <img
                                    src={hero}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </li>
                            <li className="h-full w-1/5">
                                <img
                                    src={desk}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </li>
                            <li className="h-full w-1/5">
                                <img
                                    src={bed}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </li>
                            <li className="h-full w-1/5">
                                <img
                                    src={door}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </li>
                            <li className="h-full w-1/5">
                                <img
                                    src={biblio}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </li>
                        </ul>
                        <ul className="absolute flex gap-2 bottom-4 left-[50%] -translate-x-1/2">
                            <li>
                                <input
                                    type="radio"
                                    name="slider"
                                    id="0"
                                    className="cursor-pointer"
                                    onClick={() => setSlider(0)}
                                />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="slider"
                                    id="1"
                                    className="cursor-pointer"
                                    onClick={() => setSlider(100)}
                                />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="slider"
                                    id="2"
                                    className="cursor-pointer"
                                    onClick={() => setSlider(200)}
                                />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="slider"
                                    id="3"
                                    className="cursor-pointer"
                                    onClick={() => setSlider(300)}
                                />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="slider"
                                    id="4"
                                    className="cursor-pointer"
                                    onClick={() => setSlider(400)}
                                />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default App;
