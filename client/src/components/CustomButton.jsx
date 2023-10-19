import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ title, type, handleClick, customStyles }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      className={`px-2 py1.2 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

export default CustomButton;
