import axios from "axios";
import { useState } from "react";
import { api } from "../link/API";

const Imager = () => {
  const [imager, setImager] = useState("");

  const convertToBase64 = (file) => {
    return new Promise ((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve (fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject (error);
      }
    })
  };

  const name = "Calabar pool party";
  const uploadImage = async (file) => {
    const base64 = await convertToBase64(file);
    
    try {
     await axios
      .post(`${api}/image`, {image: base64, name: name})
      .then((response) => {
        setImager(response.data.url);
        
        return console.log(response.data.url);
      })
    } catch (error) {
      
    }
  }
  // const convertToBase64 = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImager(reader.result);
  //   };
  // };

  return (
    <>
      <h1>Imager</h1>
        <input
          className="form-control"
          type="file"
          id="img"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => {
            const file = e.target.files[0];
            uploadImage(file);
          }}
        />

      <img src={imager} width="200px" alt="upload"/>
    </>
  );
};

export default Imager;
