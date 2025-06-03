import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const Latest = () => {
  const scrollCart = useRef(null);
  const scrollCarts = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  return (
    <div>
      <div className="relative container m-auto mt-24 px-2 md:px-4">
        <h2 className="text-2xl mb-12">Latest Products</h2>
        {scrollLeft ? (
          <span className="absolute z-20 left-0 top-[58%] -translate-y-1/2 py-2 px-4 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-purple-600">
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
        ) : (
          ''
        )}
        {scrollRight ? (
          <span className="absolute z-20 right-0 top-[58%] -translate-y-1/2 py-2 px-4 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-purple-600">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        ) : (
          ''
        )}
        <div
          className="overflow-y-auto scrollbar-hidden"
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
          <ul
            className="flex gap-2 md:gap-4 w-[500%] md:w-[334%] lg:w-[250%] xl:w-[200%]"
            ref={scrollCarts}
          >
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Latest;
