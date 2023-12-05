import { BsCardChecklist } from "react-icons/bs";
import { ImScissors } from "react-icons/im";
import { Button } from "../fragments/Button";
import { StyledNav } from "../styles/styledNav";
import { IoCartOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";

export const Nav = ({ setActiveSection }) => {
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <StyledNav>
        <Button onClick={() => handleButtonClick("barber")}>
          <ImScissors />
        </Button>
        <Button onClick={() => handleButtonClick("services")}>
          <BsCardChecklist />
        </Button>
        <Button onClick={() => handleButtonClick("products")}>
          <IoCartOutline />
        </Button>
        <Button onClick={() => handleButtonClick("chores")}>
          <LuListTodo />
        </Button>
      </StyledNav>
    </>
  );
};
