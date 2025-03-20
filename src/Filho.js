import React from "react";

const Filho = ({ label, name, value, onChange, onBlur }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{ display: "block", marginBottom: "10px", padding: "5px", width: "100%" }}
      />
    </div>
  );
};

export default Filho;
