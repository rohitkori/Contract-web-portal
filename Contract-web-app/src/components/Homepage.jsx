import { useState } from "react";
import axios from "axios";
import Contract from "./Contract";
import homepage_image from "../assets/homepage-image.svg";
import Loader from "../assets/Loader.svg";

const Homepage = () => {
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const DropDown = () => {
    return (
      <>
        {/* <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={handleDropDown}
        >
          Contract Type
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Employee
            </li>
          </ul>
        </div> */}
        <select
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          name="Type"
          onChange={(e) => setType(e.target.value)}
          defaultValue={type ? type : "none"}
        >
          <option value="none" selected disabled hidden>
            Select an option
          </option>
          <option
            value="Employee"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Employee
          </option>
          <option value="Other">Other</option>
        </select>
      </>
    );
  };

  const Details = (props) => {
    const contractType = props.contractType;
    if (contractType === "Employee") {
      return (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label
              htmlFor="position"
              className="  my-1 sm:my-2 md:my-4 md:text-xl"
            >
              Position
            </label>
            <input
              type="text"
              name="position"
              className="bg-slate-950 rounded-md border-2 border-stone-50 my-1 shadow-lg shadow-blue-950/50 hover:shadow-blue-950 sm:my-2 md:my-4 text-center sm:py-1 md:py-1.5 "
            />
            <label
              htmlFor="organization"
              className="  my-1 sm:my-2 md:my-4 md:text-xl"
            >
              Organization
            </label>
            <input
              type="text"
              name="organization"
              className="bg-slate-950 rounded-md border-2 border-stone-50 my-1 shadow-lg shadow-blue-950/50 hover:shadow-blue-950 sm:my-2 md:my-4 text-center sm:py-1 md:py-1.5 "
            />
            <label
              htmlFor="typeOfPosition"
              className="  my-1 sm:my-2 md:my-4 md:text-xl"
            >
              Type of Position
            </label>
            <input
              type="text"
              name="typeOfPosition"
              className="bg-slate-950 rounded-md border-2 border-stone-50 my-1 shadow-lg shadow-blue-950/50 hover:shadow-blue-950 sm:my-2 md:my-4 text-center sm:py-1 md:py-1.5 "
            />
            <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <input type="submit" />
            </div>
          </form>
        </>
      );
    } else {
      return (
        <>
          <h1>other</h1>
        </>
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const position = e.target.position.value;
    const organization = e.target.organization.value;
    const typeOfPosition = e.target.typeOfPosition.value;
    console.log(position, organization);
    const response = await axios.post("http://localhost:5000/employee", {
      position: position,
      organization: organization,
      typeOfPosition: typeOfPosition,
    });
    try {
      if (response.status == 200) {
        setLoading(false);
        setData(response.data);
        console.log(response.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <div className="bg-gray-950 min-h-screen max-w-full pt-4  flex flex-col md:flex-row justify-evenly items-center text-center text-white ">
            <img src={Loader} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray-950 min-h-screen max-w-full pt-4  flex flex-col md:flex-row justify-evenly items-center text-center text-white ">
            <div className="  h-3/5 w-3/5 md:h-2/5 md:w-2/5 ">
              <img
                src={homepage_image}
                className="rounded-lg my-6 shadow-lg shadow-blue-950/50 hover:shadow-blue-950/100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101"
                alt=""
              />
            </div>
            <div className="homepage-right-container flex flex-col items-center">
              <h1 className=" text-xl sm:text-2xl md:text-4xl font-bold  text-center text-white my-1 sm:my-2 md:my-4">
                GET YOUR CONTRACT
              </h1>
              {type ? (
                <>
                  <DropDown />
                  <Details contractType={type} className="text-white" />
                </>
              ) : (
                <DropDown />
              )}
            </div>
          </div>
          {data ? <Contract data={data} /> : null}
        </>
      )}
    </>
  );
};

export default Homepage;
