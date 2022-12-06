import React from "react";
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>

      {meta.touched && meta.error ? (
        <>
          <input
            className="text-input form-control border border-danger"
            {...field}
            {...props}
          />
          <div className="text-danger">{meta.error}</div>
        </>
      ) : (
        <input
          className="text-input form-control"
          {...field}
          {...props}
        ></input>
      )}
    </div>
  );
};

export default TextInput;
