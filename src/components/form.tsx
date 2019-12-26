import React, { FunctionComponent, ChangeEvent, useState } from "react";
import { PhoneInput } from "./phone-input";

interface IProps {

}

const Form: FunctionComponent<IProps> = () => {
  const [phone, setPhone] = useState("5");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const unmaskPhone = (maskedPhone: string) => {
    return maskedPhone.replace(/^0|\(|\)|_|\s/g, "")
  }

  const validatePhone = (phoneNumber: string): boolean => {
    const phoneRegex = /^.{10}$/;
    return (!phoneNumber || !phoneRegex.test(phoneNumber));
  }

  const onSubmitClick = () => {
    const phoneNumber = unmaskPhone(phone);
    if (!validatePhone(phoneNumber)) {
      return setSuccess(true);
    }
    setError(true);
  }

  const onPhoneFocus = () => {
    if (error) {
      setError(false);
    }
  }

  return <>
    <div className="form">
      <div className="input-container">
        <PhoneInput
          onChange={onPhoneChange}
          onFocus={onPhoneFocus}
          className={`phone ${error && "has-error"}`}
          value={phone}
        />
      </div>
      <button onClick={onSubmitClick}>Submit</button>
      {success && <label className="success">Success</label>}
    </div>
  </>;
};
export { Form };