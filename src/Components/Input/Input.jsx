export const Input = ({ type, name, style, value, placeholder, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      className={style}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
