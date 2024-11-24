import footerImg from "../../assets/img/Shape.svg";
import organizationImg from "../../assets/img/selo.svg";
import logo from "../../assets/img/logo.png";
import facebookIcon from "../../assets/icons/facebook.svg";
import xIcon from "../../assets/icons/x.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

function Footer() {
  return (
    <footer className="mt-7">
      <img className="w-full" alt="Footer" src={footerImg} />
      <img className="w-44 mx-auto my-4" alt="Logo" src={logo} />
      <div className="flex justify-between mx-60">
        <img alt="Selo da organização" src={organizationImg} />
        <div className="flex">
          <img className="w-5" alt="Facebook" src={facebookIcon} />
          <img className="w-5 mx-12" alt="X" src={xIcon} />
          <img className="w-5" alt="Instagram" src={instagramIcon} />
        </div>
      </div>
      <hr className="w-full my-5 border-gray-300" />
    </footer>
  );
}

export default Footer;
