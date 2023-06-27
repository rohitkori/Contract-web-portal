import homepage_image from "../assets/homepage-image.svg";
const Homepage = () => {

  return (
    <>
      <div className="bg-slate-950 min-h-screen w-screen md:flex justify-evenly items-center text-center text-white ">
        <div className="h-64 w-64">
          <img
            src={homepage_image}
            className="rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-blue-500/50"
            alt=""
          />
        </div>
        <div className="homepage-right-container flex flex-col">
          <h1 className="text-3xl font-bold underline text-center text-white">
            Get your Contract
          </h1>
          {/* <div> */}
            <label htmlFor="type">Type</label>
            <input type="text" name="type" />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Homepage;
