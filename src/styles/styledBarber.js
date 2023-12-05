import { styled } from "styled-components";
import fundo from "../assets/images/fundo_barber2.jpg";

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
  filter: brightness(50%) contrast(50%) saturate(200%);
`;

export const StyledMain = styled.main`
  padding-top: 15px;
  div.title {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    h1,
    h2,
    h3 {
      color: whitesmoke;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;
    }
    p {
      display: flex;
      margin-left: 5%;
      margin-right: 5%;
      color: whitesmoke;
      justify-content: center;
      align-items: center;
    }
    a {
      text-decoration: none;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      border: 2px;
      border-radius: 4px;
      border-color: whitesmoke;
      width: 120px;
      height: 40px;
      color: whitesmoke;
      background-color: blueviolet;
      text-decoration: none;
    }
  }
  div.barber {
    margin-top: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    h1,
    h2,
    h3 {
      color: whitesmoke;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;
    }
    p {
      display: flex;
      margin-left: 5%;
      margin-right: 5%;
      color: whitesmoke;
      justify-content: center;
      align-items: center;
    }
    a {
      text-decoration: none;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      border: 2px;
      border-radius: 4px;
      border-color: whitesmoke;
      width: 120px;
      height: 40px;
      color: whitesmoke;
      background-color: green;
      text-decoration: none;
    }
  }
`;
