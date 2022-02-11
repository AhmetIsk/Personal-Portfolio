import "./styles.css";
import light from '../../assets/png/light.png';
import night from '../../assets/png/night.png';
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { blueThemeDark } from "../../theme/theme";

const Toggle = () => {
  const { theme, setHandleTheme } = useContext(ThemeContext);
  const [itsvalue, setItsValue] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (theme === blueThemeDark)
      setChecked(true);
  }, [])
  const handlevalue = (e) => {
    setItsValue(!itsvalue);
    setChecked(!checked);
    setHandleTheme();
  }
  return (
    <div className="toggle-container">
      <input type="checkbox" className="toggle-checkbox" id="toggle" checked={checked} onClick={handlevalue}/>
      <label className="toggle-label" htmlFor="toggle">
        <img
          src={night}
          className="toggle-icons"
          alt=""
        />
        <img
          src={light}
          className="toggle-icons"
          alt=""
        />

        <div className="toggle-ball"></div>
      </label>
    </div>
  );
};

export default Toggle;