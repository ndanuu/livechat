import React from "react";

const InputFields = ({
  type,
  onChange,
  label,
  value,
  error,
  otherProps,
  name,
  placeholder
}) => {
  return (
    <div className="form-group" data-test="InputFieldsComponent">
      {otherProps}
      <label htmlFor="input1">{label}</label>
      <input
        className="my-input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        value={value}
        name={name}
      />
    </div>
  );
};

export default InputFields;
