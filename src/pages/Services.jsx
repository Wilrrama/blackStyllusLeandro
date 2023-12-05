import { StyledMain, BackgroundContainer } from "../styles/styledServices";
import corte_simples from "../assets/images/services/corte_simples.jpeg";
import quimica from "../assets/images/services/quimica.jpeg";
import luzes from "../assets/images/services/luzes.jpeg";
import fazendo_barba from "../assets/images/services/fazendo_barba.jpeg";
import fazendo_pezinho from "../assets/images/services/fazendo_pezinho.jpeg";
import cortes_especiais from "../assets/images/services/cortes_especiais.jpeg";

export const Services = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <div className="title">
          <h2>Serviços</h2>
        </div>
        <ul className="services">
          <li className="service">
            <img src={corte_simples} alt="Corte Simples" />
            <div className="services__info">
              <h3>Cortes Simples</h3>
              <h3>R$ 25,00</h3>
            </div>
          </li>
          <li className="service">
            <img src={quimica} alt="Imagem Química" />
            <div className="services__info">
              <h3>Química </h3>
              <h3>R$ 60,00</h3>
            </div>
          </li>
          <li className="service">
            <img src={luzes} alt="imagem Luzes" />
            <div className="services__info">
              <h3>Luzes </h3>
              <h3>R$ 55,00</h3>
            </div>
          </li>
          <li className="service">
            <img src={fazendo_barba} alt="imagem barba" />
            <div className="services__info">
              <h3>Barba </h3>
              <h3>R$ 20,00</h3>
            </div>
          </li>
          <li className="service">
            <img src={fazendo_pezinho} alt="imagem Pezinho" />
            <div className="services__info">
              <h3>Pezinho </h3>
              <h3>R$ 10,00</h3>
            </div>
          </li>
          <li className="service">
            <img src={cortes_especiais} alt="imagem Cortes Especiais" />
            <div className="services__info">
              <h3>Cortes Especiais </h3>
              <h3>R$ 35,00</h3>
            </div>
          </li>
        </ul>
      </StyledMain>
    </>
  );
};
