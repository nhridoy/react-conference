import { BsArrowDownUp } from "react-icons/bs";
const Option = ({ name, id }) => {
  return (
    <div className="border rounded-md flex items-center gap-4 p-4 bg-white hover:bg-yellow-400 cursor-pointer group font-semibold drop-shadow-lg">
      <div className="bg-white p-3 rounded-md cursor-fancy">
        <BsArrowDownUp className="text-lg text-yellow-400 " />
      </div>
      <span className="group-hover:text-white">{name}</span>
    </div>
  );
};

export default Option;
