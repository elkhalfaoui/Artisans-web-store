import './index.css';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <div className="mt-24">
        <div className="container m-auto px-4 lg:px-0 relative">
          <h2 className="relative p-2 text-3xl font-medium w-fit mb-12 border-b-2 border-sky-600 after:bg-white after:absolute after:left-1/2 after:-bottom-2 after:rounded-full after:w-4 after:h-4 after:border-2 after:border-sky-600">
            Human Resources
          </h2>
        </div>
      </div>
    </div>
  );
};
export default App;
