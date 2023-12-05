import logo from "../assets/images/barber.png";
import Switch from "react-switch";
import { StyledHeader } from "../styles/styledHeader";
import light from "../styles/themes/light";
import { useTheme } from "styled-components";

export const Header = ({ children, toggleTheme }) => {
  const theme = useTheme(light);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return currentTime.toLocaleTimeString(undefined, options);
  };
  return (
    <>
      <StyledHeader>
        <img src={logo} alt="Logotipo da equipe campeã" />
        <div>
          <h1>BARBEARIA</h1>
          <h1>BLACK STYLLUS</h1>
          <h1>RUA ESTÁCIO DE SÁ, 2011</h1>
          {children}
        </div>
        <section>
          <h2>{getCurrentDate()}</h2>
          <p>{getCurrentTime()}</p>
          <Switch
            onChange={toggleTheme}
            checked={theme === light}
            height={15}
            checkedIcon={false}
            offColor={theme.colors.secondary}
            onColor={theme.colors.secondary}
            handDiameter={15}
          />
          <p>by bigode</p>
        </section>
      </StyledHeader>
    </>
  );
};
