import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Contract(props) {
  const [data, setData] = useState("");
  const location = useLocation();

  const contractData = props.data;
  
  useEffect(() => {
    console.log("contract data", contractData);
    setData(contractData);
  }, []);

  const downloadAsDoc = (fileName) => {
    
    const blob = new Blob([data], { type: 'text/plain' });
    console.log(blob);
  
    // Create a temporary URL for the Blob object
    const url = URL.createObjectURL(blob);
  
    // Create a link element
    const link = document.createElement('a');
    console.log(link);
    // Set the link's properties
    link.href = url;
    link.download = fileName;
    console.log("downloading");
  
    // Programmatically click the link to initiate the download
    link.click();
  
    // Clean up the temporary URL and link element
    URL.revokeObjectURL(url);
    link.remove();
  }

  return (
    <form className="bg-gray-900">
      <div className="w-full h-screen mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
          <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
          </div>
          <div
            type="submit"
            onClick={(e) => downloadAsDoc("contract.doc")}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Download
          </div>
        </div>
        <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
          <label className="sr-only">Publish post</label>
          <textarea
            id="editor"
            rows="8"
            className="block w-full h-screen px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write an article..."
            defaultValue={data}
            onChange={(e) => setData(e.target.value)}
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        Download
      </button>
    </form>
  );
}

export default Contract;
