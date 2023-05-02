import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
const Createpost = () => {
  const [postdata, setpostdata] = useState({
    title: "",
    Photo: "",
  });

  function setDATAL(e){
    e.preventDefault();
    // console.log(postdata)
    // console.log("a")
    localStorage.setItem("postdata",JSON.stringify(postdata))
  }
  return (
    <div className="container">
      {/* title */}
      <h3 className="mt-3 text-center col-6">Title</h3>
      <div className="mb-3 col-6">
        <input
          type="text"
          name="title"
          value={postdata.title}
          onChange={(e) =>
            setpostdata({ ...postdata, [e.target.name]: e.target.value })
          }
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your title"
        />
      </div>

      {/* img */}

      <div className="mb-3 text-center col-6">
        <label htmlFor="formFileSm" className="form-label">
          Chose your image
        </label>
        <input
          name="Photo"
          value={postdata.Photo}
          onChange={(e) =>
            setpostdata({ ...postdata, [e.target.name]: e.target.value })
          }
          className="form-control form-control-sm"
          id="formFileSm"
          type="file"
        />
      </div>
      {/* </button> */}
      <Button onClick={setDATAL} as="input" type="submit" value="Submit" />
    </div>
  );
};

export default Createpost;
