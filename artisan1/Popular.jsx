import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const Popular = () => {
  const scrollCart = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  return (
    <div>
      <div className="relative container m-auto mt-24 px-2 md:px-4">
        <h2 className="text-2xl mb-12">Popular Products</h2>
        {scrollLeft ? (
          <span
            className="absolute z-20 left-0 top-[58%] -translate-y-1/2 py-2 px-4 rounded-full cursor-pointer bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-purple-600"
            onClick={() => {
              if (scrollCart.current.scrollLeft > 0) {
                scrollCart.current.scrollLeft -=
                  scrollCart.current.scrollWidth / 12;
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
            className="absolute z-20 right-0 top-[58%] -translate-y-1/2 py-2 px-4 rounded-full cursor-pointer bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-purple-600"
            onClick={() => {
              if (
                scrollCart.current.scrollLeft < scrollCart.current.scrollWidth
              ) {
                scrollCart.current.scrollLeft +=
                  scrollCart.current.scrollWidth / 12;
              }
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        ) : (
          ''
        )}
        <ul
          className="overflow-x-auto scrollbar-hidden flex gap-2 md:gap-4 w-full snap-x snap-mandatory"
          ref={scrollCart}
          onScroll={() => {
            if (scrollCart.current.scrollLeft === 0) {
              setScrollLeft(false);
            } else {
              setScrollLeft(true);
            }
            if (
              scrollCart.current.clientWidth + scrollCart.current.scrollLeft ===
              scrollCart.current.scrollWidth
            ) {
              setScrollRight(false);
            } else {
              setScrollRight(true);
            }
          }}
        >
          {/* <ul className="flex gap-2 md:gap-4 w-[500%] md:w-[334%] lg:w-[250%] xl:w-[200%]"> */}
          <Cart num={1} />
          <Cart num={2} />
          <Cart num={3} />
          <Cart num={4} />
          <Cart num={5} />
          <Cart num={6} />
          <Cart num={7} />
          <Cart num={8} />
          <Cart num={9} />
          <Cart num={10} />
          <Cart num={11} />
          <Cart num={12} />
          {/* </ul> */}
        </ul>
      </div>
    </div>
  );
};
export default Popular;
