import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { emailsAndPasswords } from "../context/getEmailsAndPasswords";
import { changeData } from "../LoginInputs/changeData";

const ForgetPassInputs = ({ setIsForgotten }) => {
  const [newInputs, setNewInputs] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <Input
        type="text"
        placeholder="new email"
        color="aqua"
        name="email"
        value={newInputs.email}
        onChange={(e) => {
          setNewInputs((prev) => {
            return {
              ...prev,
              [e.target.name]: e.target.value,
            };
          });
        }}
      />
      <Input
        type="text"
        placeholder="new password"
        color="aqua"
        name="password"
        value={newInputs.password}
        onChange={(e) => {
          setNewInputs((prev) => {
            return {
              ...prev,
              [e.target.name]: e.target.value,
            };
          });
        }}
      />
      <Button
        onClick={() => {
          changeData(emailsAndPasswords, newInputs.email, newInputs.password);
          setIsForgotten(false);
        }}
        disabled={false}
        text="Submit Changes"
      />
    </>
  );
};

export default ForgetPassInputs;