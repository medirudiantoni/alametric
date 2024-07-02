import { useNavigate } from "react-router";
import alaSVG from "../assets/alametric.svg";
import exitSVG from "../assets/icons/exit.svg";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-full h-fit px-5 py-8 flex items-center justify-between">
      <div className="max-w-[140px]">
        <img src={alaSVG} alt="ala" className="w-full h-fit" />
      </div>
      <button onClick={handleLogout} className="max-w-6">
        <img src={exitSVG} alt="exit" className="w-full h-fit" />
      </button>
    </div>
  );
};

export default Header;
