import { GrMenu } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { PiNotepad } from "react-icons/pi";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div>
        <GrMenu size={22} />
        <div className="icons">
          <AiOutlineHome className="menu-icon" size={22} />
          <PiNotepad className="menu-icon" size={22} />
        </div>
      </div>
      <div className="initials">NT</div>
    </nav>
  );
};

export default Sidebar;
