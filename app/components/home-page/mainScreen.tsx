import CustomInput from "../CustomInput";

const MainScreen = ({ email, onEmailChange, onNextPress }: any) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="w-8/12 bg-slate-400 h-[500px]">Test</div>
      <div className=" pl-10 w-6/12 ">
        <div className=" h-[180px]  flex flex-col  items-start relative">
          <CustomInput
            name={"mail"}
            label={"Mail"}
            value={email}
            onChange={onEmailChange}
          />
          <button
            className="m-2 rounded-md bg-black px-5 py-2 my-5 text-white absolute bottom-0 right-0"
            onClick={() => onNextPress()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
