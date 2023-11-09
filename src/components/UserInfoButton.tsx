import React, { useState } from "react";
import "../styles/UserInfoButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoginWindow from "./LoginWindow";

const UserInfoButton = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isLoginFrameVisible, setLoginFrameVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  const showLoginFrame = () => {
    setLoginFrameVisible(!isLoginFrameVisible);
  };

  const btnStyle = {
    display: "block",
    height: "60px",
    width: "60px",
    border: "1px solid red",
    borderRadius: "50%",
  };

  return (
    <>
      <div className="floating-button">
        <button style={btnStyle} onClick={togglePopup}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        {isPopupVisible && (
          <div className="popup">
            <LoginWindow isShowLoginWindow={true} />
            <hr />
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserInfoButton;
