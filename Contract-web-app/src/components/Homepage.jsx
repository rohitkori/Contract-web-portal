import homepage_image from "../assets/homepage-image.svg";
const Homepage = () => {

  return (
    <>
      <div className="bg-gray-950 min-h-screen w-screen pt-4  flex flex-col md:flex-row justify-evenly items-center text-center text-white ">
        <div className="  h-3/5 w-3/5 md:h-2/5 md:w-2/5 ">
          <img
            src={homepage_image}
            className="rounded-lg shadow-lg my-6  shadow-blue-950/50 hover:shadow-blue-950/100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101"
            alt=""
          />
        </div>
        <div className="homepage-right-container flex flex-col items-center">
          <h1 className=" text-xl sm:text-2xl md:text-4xl font-bold  text-center text-white my-1 sm:my-2 md:my-4">
            GET YOUR CONTRACT
          </h1>
          <label htmlFor="type" className="  my-1 sm:my-2 md:my-4 md:text-xl">
            Type
          </label>
          <input
            type="text"
            name="type"
            className="bg-slate-950 rounded-md border-2 border-stone-50 my-1 sm:my-2 md:my-4 text-center  sm:py-1 md:py-1.5 "
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
