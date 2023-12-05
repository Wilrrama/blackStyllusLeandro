import { StyledMain, BackgroundContainer } from "../styles/styledBarber";
import { BiLogoWhatsapp } from "react-icons/bi";
import working from "../assets/images/trabalhando.jpeg";
import ambiente from "../assets/images/ambiente.jpeg";

export const Barber = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <div className="title">
          <h2>BLACK STYLLUS</h2>
          <a
            href="https://maps.app.goo.gl/xno3cWE1ru57drKWA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Localização</button>
          </a>
        </div>
        <div className="barber">
          <h3>Agende seu horário pelo WhatsApp</h3>
          <a
            href="https://api.whatsapp.com/send?phone=5519988881458"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <BiLogoWhatsapp />
              Leandro
            </button>
          </a>

          <img src={working} alt="" />
          <p>
            Com mais de 10 anos de experiência no ramo de prestação de Serviços.
            Leandro é uma profissional muito dedicado.
          </p>
          <h2>Ambiente Familiar</h2>
          <img src={ambiente} alt="" />
          <p>
            Seu salão não é apenas um local de trabalho, mas um ambiente
            familiar onde os clientes se sentem bem-vindos.Leandro acredita que
            uma experiência de beleza vai além do resultado final; é sobre
            construir relacionamentos, criar uma atmosfera acolhedora.
          </p>
        </div>
      </StyledMain>
    </>
  );
};
