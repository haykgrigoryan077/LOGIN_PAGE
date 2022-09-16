import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Popup from "../components/Popup";
import { emailsAndPasswords } from "../context/getEmailsAndPasswords";
import { checkPassword } from "./checkData";
import "./style.css";

const LoginPageInputWrapper = ({ setUserInputSuccessModal}) => {
  const [userEmailAndPass, setEmailAndPass] = useState({
    email: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = useState(false);

  const handleInputChanges = (e) => {
    setEmailAndPass((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="loginInputWrapper">
      <Input
        type='text'
        placeholder="email"
        color="blue"
        name="email"
        value={userEmailAndPass.name}
        onChange={handleInputChanges}
      />
      <Input
        type='password'
        placeholder="password"
        color="blue"
        name="password"
        value={userEmailAndPass.name}
        onChange={handleInputChanges}
      />
      <Button
        text='Submit'
        onClick={() => {
          console.log(userEmailAndPass);
          console.log(userEmailAndPass);
          
          if (
            checkPassword(
              emailsAndPasswords,
              userEmailAndPass.email,
              userEmailAndPass.password
              )
              ) {
                setUserInputSuccessModal(
                  checkPassword(
                    emailsAndPasswords,
                    userEmailAndPass.email,
                    userEmailAndPass.password
                    )
                    );
                    setIsDisabled(!isDisabled);
          }
        }}
        disabled={isDisabled}
      />
    </form>
    
  );
};

export default LoginPageInputWrapper;
