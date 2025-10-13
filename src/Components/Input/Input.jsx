import { forwardRef } from "react";

export const Input = forwardRef(function (
  { type, name, style, value, placeholder, onChange },
  ref
) {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      className={style}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
});
