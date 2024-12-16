export default function InputText({
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={"form-control"}
      value={value}
      onChange={onChange}
    />
  );
}
