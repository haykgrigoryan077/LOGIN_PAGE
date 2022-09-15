import React, { useState } from "react";
import Button from "../../components/Button";
import Popup from "../../components/Popup";
import ForgetPassInputs from "../../ForgetPassInputs";
import LoginPageInputWrapper from "../../LoginInputs";
import "./style.css";

const MainPage = () => {
  const [userInputSuccessModal, setUserInputSuccessModal] = useState(false);
  const [isForgotten, setForgotPass] = useState(false);

  const handlePassForgot = () => {
    setForgotPass(true);
  };

  return isForgotten ? (
    <div className="mainPageWrapper">
      <Popup>
        <ForgetPassInputs setIsForgotten={setForgotPass} />
      </Popup>
    </div>
  ) : (
    <div className="mainPageWrapper">
      <LoginPageInputWrapper
        userInputSuccessModal={userInputSuccessModal}
        setUserInputSuccessModal={setUserInputSuccessModal}
      />
      <Button
        text="Forgot Password?"
        onClick={() => {
          handlePassForgot();
        }}
        disabled={false}
      />
      {userInputSuccessModal && (
        <Popup>
          <h1>Success</h1>
        </Popup>
      )}
    </div>
  );
};

export default MainPage;
