import React from "react";

const SnackCategoryFrame = () => {
  return (
    <div style={{ maxHeight: "fit-content", textAlign: "center" }}>
      <ul className="nav nav-tabs" style={{ marginLeft: "120px" }}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Region
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Category
          </a>
        </li>
      </ul>
      <div>
        <img
          style={{ height: "745px" }}
          src="src/assets/images/TaiwanCuisineMap.jpg"
        ></img>
      </div>
    </div>
  );
};

export default SnackCategoryFrame;
