import React from "react";

const ContactFormElement = ({
  Type,
  Label,
  Name,
  Value,
  ShowLabel,
  Options,
  ...props
}) => {
  let Input = null;
  switch (Type) {
    case "text":
    case "number":
    case "email":
    case "password":
    case "radio":
    case "checkbox":
      Input = (
        <input
          type={Type}
          name={Name}
          id={Name}
          placeholder={Label}
          {...props}
        />
      );
      break;
    case "textarea":
      Input = (
        <textarea
          name={Name}
          id={Name}
          value={Value}
          placeholder={Label}
          {...props}
        />
      );
      break;
    case "select":
      Input = (
        <select
          name={Name}
          id={Name}
          value={Value}
          defaultValue=""
          placeholder={Label}
          {...props}
        >
          <option value="" disabled>
            {Label}
          </option>
          {Options &&
            Options.map((option, key) => (
              <option value={option} key={key}>
                {option}
              </option>
            ))}
        </select>
      );
      break;
    default:
      break;
  }
  return (
    <label className={Type === "select" ? "select" : null}>
      {ShowLabel && <strong>{Label}</strong>}
      {Input}
    </label>
  );
};

export default ContactFormElement;
