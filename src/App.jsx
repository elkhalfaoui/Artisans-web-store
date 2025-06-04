import { Route, RouterProvider, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Home from './Home';
import Latest from './Latest';
import Popular from './Popular';
import router from './router';

const App = () => {
  return (
    <div className="bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 scroll-smooth">
      <Home />
    </div>
  );
};
export default App;
