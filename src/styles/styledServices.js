import { styled } from "styled-components";
import fundo from "../assets/images/fundo_service2.jpg";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  filter: brightness(50%) contrast(60%) saturate(200%);
`;

export const StyledMain = styled.main`
  padding-top: 15px;
  div.title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    h1,
    h2,
    h3 {
      color: whitesmoke;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;
    }
  }

  ul.services {
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  li.service {
    display: flex;
    align-items: center;
    margin-left: 15%;
    gap: 5px;

    h3 {
      font-size: 16px;
      color: whitesmoke;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;
    }

    img {
      width: 120px;
      height: 70px;
    }
  }
`;
