import footerImg from "../../assets/img/Shape.svg";
import organizationImg from "../../assets/img/selo.svg";
import logo from "../../assets/img/logo.png";
import facebookIcon from "../../assets/icons/facebook.svg";
import xIcon from "../../assets/icons/x.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="mt-7">
      <img className="w-full" alt="Footer" src={footerImg} />
      <img className="w-44 mx-auto my-4" alt="Logo" src={logo} />

      <div className="flex justify-between mx-60 items-center">
        <img alt="Selo da organização" src={organizationImg} />
        <div className="flex">
          <a href="https://www.facebook.com/profile.php?id=61559172705930">
            <img className="w-6" alt="Facebook" src={facebookIcon} />
          </a>
          <a href="https://twitter.com/Arcanimal_">
            <img className="w-6 mx-12" alt="X" src={xIcon} />
          </a>
          <a href="https://www.instagram.com/projeto.arcanimal/">
            <img className="w-6" alt="Instagram" src={instagramIcon} />
          </a>
        </div>
      </div>

      <hr className="w-full my-5 border-gray-300" />

      <div className="flex md:justify-between flex-col-reverse text-center  mx-11 mt-9 mb-24   ">
        <p className="text-default-blue flex ">
          <span> &copy; {getYear} Arcanimal. </span>Todos os direitos
          reservados.
        </p>
        <div className="text-custom-blue flex flex-wrap justify-center">
          <div className="flex gap-6">
            <a href="/files/Termos_De_Uso.pdf" target="_blank" rel="noreferrer">
              Termos de Uso
            </a>
            <a
              className="mx-6"
              href="/files/Aviso_De_Privacidade.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Aviso de Privacidade
            </a>
          </div>
          <a
            href="mailto:dpo@athendata.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Exerça seu direito de titular de dados
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
