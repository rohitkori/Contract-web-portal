import homepage_image from "../assets/homepage-image.svg";
const Homepage = () => {

  return (
    <>
      <div className="bg-slate-950 min-h-screen w-screen pt-4  flex flex-col md:flex-row justify-evenly items-center text-center text-white ">
        <div className="h-2/5 w-2/5 ">
          <img
            src={homepage_image}
            className="rounded-lg shadow-lg my-6  hover:shadow-white/10"
            alt=""
          />
        </div>
        <div className="homepage-right-container flex flex-col">
          <h1 className=" text-xl sm:text-2xl md:text-4xl font-bold  text-center text-white my-4">
            Get your Contract
          </h1>
          <label htmlFor="type" className="my-4">Type</label>
            <input type="text" name="type" className="bg-slate-950 my-4 rounded-md border-2 border-stone-50" />
        </div>
      </div>
    </>
  );
};

export default Homepage;
