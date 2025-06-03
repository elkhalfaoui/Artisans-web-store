import Cart from "./Cart"
import Header from "./Header"
import Hero from "./Hero"
import Latest from "./Latest"
import Popular from "./Popular"

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Popular />
      <Latest />
      <div className="bg-red-200 container m-auto mt-24 px-2 md:px-4">
        <h2 className="text-2xl mb-12">Scroll</h2>
        <ul className="">
          <Cart />
        </ul>
      </div>
      <div id="about" className="bg-neutral-700">
        <br />
        <br />
        <br />
        <h1>About</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div id="contacts" className="bg-pink-900">
        <br />
        <br />
        <br />
        <h1>Contacts</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="bg-gray-700">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Footer</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
export default Home