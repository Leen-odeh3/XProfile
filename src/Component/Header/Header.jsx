import  { useContext, useEffect, useState } from "react";
import "./Header.css";
import ThemeContext from "../../Context/ThemeContext";
import xlogo_dark from "../../assets/xlogo_dark.png";
import xlarg from "../../assets/xlarge.png";

const Header = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const [iconTheme, setIconTheme] = useState(theme);

  useEffect(() => {
    setIconTheme(theme);
  }, [theme]);

  const style = {
    color: iconTheme === "white" ? "black" : "white",
    backgroundColor: iconTheme === "white" ? "white" : "black",
  };

  const handleToggle = () => {
    toggle(); 
    setIconTheme(iconTheme === "white" ? "black" : "white"); 
  };

  const logoSource = iconTheme === "white" ? xlogo_dark : xlarg;
  const icon = iconTheme === "white" ? (
    <i className="bi icon bi-moon-fill"></i>
  ) : (
    <i className="bi icon bi-brightness-high-fill"></i>
  );

  return (
    <div className="main-header" style={style}>
      <img src={logoSource} alt="logo" className="logo" />
  
      <div className="header-icons">
        <div onClick={handleToggle}>{icon}</div>
        <div>
          <i className="bi icon bi-twitter-x"></i>
        </div>
        <div>
          <i className="bi icon bi-github"></i>
        </div>
        <div className="contribute">
          <b> Contribut</b> <i className="bi bi-star-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
