import React, { useState } from "react";
import {PhotossContext} from "./Photocontext";

function Photos() {
 
  const photo = React.useContext(PhotossContext)

  return (
    <div>
      <div>
        <ImageUploader/>
      </div>
      <div>
            <h1>{photo.Photo}</h1>
      </div>
    </div>
  );
}


function ImageUploader(props) {
    const [image, setImage] = useState(null);
  
    function handleImageUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        props.onImageSelect(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  
    return (
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} /> <br/>
        {image && <img src={image} alt="Uploaded image" width={200} height={200} />}
      </div>
    );
  }

  export default Photos;