import { useState } from 'react';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Popular = () => {
  const [pop, setPop] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div>
      <div className="container m-auto mt-28 px-2 md:px-4">
        <h2 className="text-2xl mb-12">Popular Products</h2>
        <div className="overflow-y-auto scrollbar-hidden">
          <ul className="flex gap-2 md:gap-4 w-[500%] md:w-[334%] lg:w-[200%]">
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        fuck
      </div>
    </div>
  );
};
export default Popular;
