import { StyledMain, BackgroundContainer } from "../styles/styledProducts";
import gel from "../assets/images/products/gel.jpg";
import kaiak from "../assets/images/products/kaiak.jpeg";

export const Products = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <div className="title">
          <h2>Produtos Disponíveis</h2>
        </div>
        <ul className="products">
          <li className="product">
            <img src={gel} alt="Gel Bozzano" />
            <div className="products__info">
              <h3>Gel </h3>
              <h3>R$ 15,00</h3>
            </div>
          </li>
          <li className="product">
            <img src={kaiak} alt="Perfume Kaik" />
            <div className="products__info">
              <h3>Kaiak </h3>
              <h3>R$ 55,00</h3>
            </div>
          </li>
        </ul>
      </StyledMain>
    </>
  );
};
