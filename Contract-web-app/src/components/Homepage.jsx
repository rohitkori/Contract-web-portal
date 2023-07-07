import { useState } from "react";
import axios from "axios";
import Contract from "./Contract";
import homepage_image from "../assets/homepage-image.svg";
import Loader from "../assets/Loader.svg";
import { API_BASE_URL } from "../config.js";

const Homepage = () => {
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const backendUrl = API_BASE_URL;

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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly"
          >
            <div className="flex flex-row mt-1 sm:mt-3 md:mt-4 justify-between">
              <label
                htmlFor="designation"
                className=" mt-1 mb-0.5 sm:mt-2 sm:mb-1 md:mt-4 md:mb-2 md:text-xl"
              >
                Designation
              </label>
              <input
                type="text"
                name="designation"
                className="bg-slate-950 rounded-md border-2 border-stone-50 mt-1 mb-0.5 sm:mt-2 sm:mb-1 md:mb-2 shadow-lg shadow-blue-950/50 hover:shadow-blue-950 text-center sm:py-1 "
              />
            </div>
            <div className="flex flex-row mt-0.5 sm:mt-3  md:mt-2 justify-between">
              <label
                htmlFor="organization"
                className="  mt-1 mb-0.5 sm:mt-2 sm:mb-1 md:mt-4 md:mb-2 md:text-xl"
              >
                Organization
              </label>
              <input
                type="text"
                name="organization"
                className="bg-slate-950 rounded-md border-2 border-stone-50 mt-1 mb-0.5 sm:mt-2 sm:mb-1 md:mt-4 md:mb-2 shadow-lg shadow-blue-950/50 hover:shadow-blue-950 text-center sm:py-1 "
              />
            </div>
            {/* <div className=""> */}
            <select
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:my-2 md:my-3"
              name="typeOfPosition"
            >
              <option value="none" selected disabled hidden>
                Select a Type
              </option>
              <option
                value="Corporate"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Corporate
              </option>
              <option
                value="RnD"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                RnD
              </option>
              <option
                value="Government"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Government
              </option>
              <option value="Other">Other</option>
            </select>
            {/* </div> */}
            <div className="text-white bg-blue-700 hover:bg-blue-800 mt-0.5 sm:mt-3  md:mt-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
    const designation = e.target.designation.value;
    const organization = e.target.organization.value;
    const typeOfPosition = e.target.typeOfPosition.value;
    console.log(designation, organization);
    const response = await axios.post(`${backendUrl}/employee`, {
      designation: designation,
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
          <div className="bg-gray-950 min-h-screen max-w-full pt-4 flex flex-col justify-evenly items-center text-center text-white ">
            <img src={Loader} alt="" />
            <h1 className="text-2xl">Generating, this may take a while</h1>
          </div>
        </>
      ) : (
        <>
          {data ? (
            <Contract data={data} />
          ) : (
            <div className="bg-gray-950 min-h-screen max-w-full pt-4  flex flex-col md:flex-row justify-evenly items-center text-center text-white ">
              <div className="  h-3/5 w-3/5 md:h-2/5 md:w-2/5 ">
                <img
                  src={homepage_image}
                  className="rounded-lg my-6 shadow-lg shadow-blue-950/50 hover:shadow-blue-950/100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101"
                  alt=""
                />
              </div>
              <div className="homepage-right-container flex flex-col items-stretch">
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
          )}
        </>
      )}
    </>
  );
};

export default Homepage;
