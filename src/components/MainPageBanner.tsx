import React from "react";

const MainPageBanner = () => {
  const MainPageBannerStyle = {
    maxHeight: "550px",
  };
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={MainPageBannerStyle}
        src="src\assets\images\mainPageBanner.png"
      ></img>
    </div>
  );
};

export default MainPageBanner;
