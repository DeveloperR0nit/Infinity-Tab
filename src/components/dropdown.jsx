import { useEffect } from "react";
import { Pencil, Trash } from "lucide-react";

export default function Dropdown({
  isOpenDropdown,
  setIsOpenDropdown,
  setIsOpenModal,
}) {
  const data = JSON.parse(localStorage.getItem("linksArr"));
  useEffect(() => {
    const handleClick = () => {
      setIsOpenDropdown(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  function style() {
    return isOpenDropdown
      ? { top: isOpenDropdown.top, left: isOpenDropdown.left }
      : {};
  }
  function deleteLink() {
    const newData = data.filter((e) => e.id !== isOpenDropdown.id);
    localStorage.setItem("linksArr", JSON.stringify(newData));
  }
  return (
    <ul
      className={`dropdown ${!isOpenDropdown ? "closed" : ""}`}
      style={style()}
    >
      <li className="dropdown-item">
        <button
          className="edit"
          onClick={() => setIsOpenModal(isOpenDropdown.id)}
        >
          <Pencil size={16} strokeWidth={3} />
          <span>Edit site</span>
        </button>
      </li>
      <li className="dropdown-item">
        <button className="remove" onClick={() => deleteLink()}>
          <Trash size={16} strokeWidth={3} />
          <span>Remove</span>
        </button>
      </li>
    </ul>
  );
}
