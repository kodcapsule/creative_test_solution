import { NavLink } from "react-router-dom";

function Logo() {
  const src = "/PCES-logo.png";

  return (
    <div className="logo text-center">
      <img src={src} alt="Logo" />
    </div>
  );
}

export default Logo;
