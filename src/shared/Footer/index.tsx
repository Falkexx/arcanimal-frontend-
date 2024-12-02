import footerImg from "../../assets/img/Shape.svg";
import organizationImg from "../../assets/img/selo.svg";
import logo from "../../assets/img/logo.png";
import facebookIcon from "../../assets/icons/facebook.svg";
import xIcon from "../../assets/icons/x.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="mt-7  text-center ">
      <img className="w-full" alt="Footer" src={footerImg} />
      <img className="w-44 mx-auto mt-4 mb-10 " alt="Logo" src={logo} />

      <div className="flex justify-between items-end px-2 md:px-28 xl:px-40">
        <img alt="Selo da organização" src={organizationImg} />
        <div className="flex mb-4 ml-2">
          <a href="https://www.facebook.com/profile.php?id=61559172705930">
            <img className="w-6" alt="Facebook" src={facebookIcon} />
          </a>
          <a href="https://twitter.com/Arcanimal_">
            <img className="w-5 mx-12" alt="X" src={xIcon} />
          </a>
          <a href="https://www.instagram.com/projeto.arcanimal/">
            <img className="w-6" alt="Instagram" src={instagramIcon} />
          </a>
        </div>
      </div>

      <hr className="w-full my-5 border-gray-300" />

      <div className="flex text-sm md:justify-between flex-col-reverse lg:flex-row mx-11 mt-9 mb-24">
        <p className="text-default-blue flex items-center justify-center">
          <span> &copy; {getYear} Arcanimal. </span>Todos os direitos
          reservados.
        </p>
        <div className="text-custom-blue flex justify-center flex-col lg:flex-row items-center">
          <div className="flex">
            <a href="/files/Termos_De_Uso.pdf" target="_blank" rel="noreferrer">
              Termos de Uso
            </a>
            <a
              href="/files/Aviso_De_Privacidade.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-6 lg:mr-6"
            >
              Aviso de Privacidade
            </a>
          </div>
          <a
            href="mailto:dpo@athendata.com.br"
            target="_blank"
            rel="noreferrer"
            className="my-5 "
          >
            Exerça seu direito de titular de dados
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
