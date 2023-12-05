import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { useState } from "react";

import { Chores } from "./pages/Chores";

import { ChoreProvider } from "./contexts/ChoreContext";
import { Barber } from "./pages/Barber";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";

export const App = ({ toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("barber");
  return (
    <>
      <Header toggleTheme={toggleTheme}>
        <Nav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </Header>
      {activeSection === "barber" ? (
        <Barber />
      ) : activeSection === "services" ? (
        <Services />
      ) : activeSection === "products" ? (
        <Products />
      ) : (
        <ChoreProvider>
          <Chores />
        </ChoreProvider>
      )}
    </>
  );
};

export default App;
