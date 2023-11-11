const CustomInput = ({
  value,
  name,
  label,
  onChange,
  disable = false,
}: any) => {
  return (
    <>
      <div className="flex items-start flex-col m-2">
        <label className="pl-2  text-xl">{label}</label>
        <input
          type="text"
          value={value}
          name={name}
          disabled={disable}
          onChange={onChange}
          className="h-[80px] w-[600px] text-4xl border-spacing-4 border-2 border-black p-2 rounded-xl"
        />
      </div>
    </>
  );
};

export default CustomInput;
