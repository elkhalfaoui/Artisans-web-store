import Header from './Header';
import Hero from './Hero';
import Popular from './Popular';

const App = () => {
  return (
    <div className="bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
      <Header />
      <Hero />
      <Popular />
    </div>
  );
};
export default App;
