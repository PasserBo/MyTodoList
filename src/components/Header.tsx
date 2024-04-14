// import SwitchToDarkIcon from "../images/icon-moon.svg";
// import SwitchToLightIcon from "../images/icon-sun.svg";

interface HeaderProps {
  themeLight: boolean;
  setThemeLight: (value: boolean) => void;
}


const Header: React.FC<HeaderProps> = ({ themeLight, setThemeLight }) => {
  // const switchThemeIcon = themeLight ? SwitchToDarkIcon : SwitchToLightIcon;
  const themeButtonText = themeLight ? "Switch to Dark Mode" : "Switch to Light Mode";

  const changeTheme = () => {
    setThemeLight(!themeLight);
  };
  // <img src={switchThemeIcon} alt="Dark Theme" />
  return (
    <header>
      <h1>My Todo List</h1>
      <button className="btn switch-theme-btn" onClick={changeTheme}>
        
        {themeButtonText}
      </button>
    </header>
  );
};

export default Header;