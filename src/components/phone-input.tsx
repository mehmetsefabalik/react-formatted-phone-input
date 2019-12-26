import React, { FunctionComponent, ChangeEvent } from "react";
import NumberFormat from 'react-number-format';

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  format?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  value: string;
}

const PhoneInput: FunctionComponent<IProps> = (
  {
    onChange,
    format = "0(###) ### ## ##",
    placeholder = "0(5__) ___ __ __",
    defaultValue = "5",
    className = "",
    value,
    onFocus = () => null,
    onBlur = () => null,
  }
) => {
  return <>
    <NumberFormat
      className={className}
      format={format}
      mask="_"
      placeholder={placeholder}
      type="tel"
      defaultValue={defaultValue}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
    />
  </>;
};
export { PhoneInput };