import React from "react";
import { useField } from "formik";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="col-md-6">
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>
      {meta.touched && meta.error ? (
        <>
          <select
            className="form-select border border-danger"
            {...field}
            {...props}
          />
          <div className="text-danger">{meta.error}</div>
        </>
      ) : (
        <select
          className="form-select"
          {...field}
          {...props}
        ></select>
      )}
    </div>
  );
};

export default Select;
