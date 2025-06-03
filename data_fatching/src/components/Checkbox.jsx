"use client";

const Checkbox = ({ checked }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      className=" w-5"
      onChange={(e) => e.target.form.requestSubmit()}
    />
  );
};

export default Checkbox;
