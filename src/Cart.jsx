import {
  faCartPlus,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = () => {
  return (
    <li className="flex-1/2 md:flex-1/3 lg:flex-1/5 flex flex-col gap-2 rounded-2xl p-3 pb-5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600">
      <div className="w-full aspect-square bg-red-300 rounded-lg"></div>
      <h3 className="px-1">Product Name</h3>
      <ul className="flex items-center gap-1 px-1 text-xs">
        <li className="flex gap-0.5">
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          <FontAwesomeIcon icon={faStarHalfStroke} className="text-amber-400" />
        </li>
        <li className="text-zinc-800">4.6</li>
        <li className="text-zinc-600">(2,487)</li>
      </ul>
      <div className="flex items-baseline gap-2 px-1">
        <p className="font-semibold text-2xl">449$</p>
        <span className="text-sm line-through">699$</span>
      </div>
      <button className="flex items-center justify-center gap-2 py-2 cursor-pointer shadow-md text-purple-700 border-2 hover:bg-purple-700 hover:text-white border-purple-700 rounded-4xl">
        <FontAwesomeIcon icon={faCartPlus} />
        <span>Add to cart</span>
      </button>
    </li>
  );
}
export default Cart