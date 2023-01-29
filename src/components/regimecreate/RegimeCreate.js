import { useState } from "react";
import classes from "../regimecreate/RegimeCreate.module.css"

const RegimeCreation = () => {
  const [imager, setImager] = useState("");
  const [display, setDisplay] = useState(true);
  const [regimeName, setRegimeName] = useState("")

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleDisplay = async (file) => {
    const base64 = await convertToBase64(file);
    setImager(base64)
    return setDisplay(false);
  };


  return (
    <>
    <h2 className={`center mt-5 ${classes.h2}`}>Create a Regime</h2>

    
    <div className="flex justify-center mt-3">
      <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
        <div className="m-4">
          <label className="inline-block mb-2 text-gray-500">
            Upload Regime Image(jpg,png,svg,jpeg)
          </label>
          <div className="flex items-center justify-center w-full">
            <img
              className="flex flex-col w-full h-64"
              style={{ display: !display ? "block" : "none" }}
              src={imager}
              alt="Please upload a jpg,png,svg, or jpeg pic."
            />
            <label
              style={{ display: !display ? "none" : "block" }}
              className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300"
            >
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select a photo
                </p>
              </div>
              <input
                onChange={(e) => {
                  const file = e.target.files[0];
                  handleDisplay(file);
                }}
                type="file"
                accept=".jpeg, .png, .jpg, .svg"
                className="opacity-0"
              />
            </label>
          </div>
        </div>
      </div>
    </div>

    <div className={`mt-3 ${classes.bod}`}>
    <div className="container">
          <form className="container">
            <div className="mb-3">
              <label htmlFor="regimeName" className="form-label">
                Enter Regime Name
              </label>
              <input
                type="text"
                className="form-control shadowB"
                autoComplete="off"
                id="regimeName"
                aria-describedby="regimeNameHelp"
                value={regimeName}
                required
                onChange={(e) => setRegimeName(e.target.value)}
              />
            </div>

            <hr />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegimeCreation;
