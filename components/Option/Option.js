import { BsArrowDownUp } from "react-icons/bs";
const Option = ({ name, selected, setSelected }) => {
  return (
    <div
      onClick={() => setSelected(name)}
      className={`${
        selected === name ? "bg-yellow-400" : "bg-white"
      } border rounded-md flex items-center gap-4 p-4 hover:bg-yellow-400 cursor-fancy group font-semibold drop-shadow-lg`}
    >
      <div className="bg-white p-3 rounded-md cursor-fancy">
        <BsArrowDownUp className="text-lg text-yellow-400 " />
      </div>
      <span
        className={`${
          selected === name && "text-white"
        } group-hover:text-white`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
    </div>
  );
};

export default Option;
