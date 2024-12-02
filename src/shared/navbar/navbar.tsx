import { useState } from "react";
import logo from "../../assets/img/logo.png";
import user from "../../assets/icons/User.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import { Link, NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { MobileNavbar } from "./MobileNavbar";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla o menu hamburguer
  const IsLoggedIn = false;

  function logout() {}

  return (
    <header className=" px-6 py-4 bg-white shadow-md z-10 BaseFont">
      <nav className="flex justify-between items-center w-full ">
        {/* LOGO */}
        <section className="flex gap-2 items-center">
          <Link to="/">
            <img className="w-[170px] cursor-pointer" src={logo} alt="Logo" />
          </Link>
        </section>

        {/* MOBILE MENU BUTTON */}
        <section className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            <SlMenu />
          </button>
        </section>

        {/* MENU ITEMS (Desktop) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[#020080] text-lg ${isActive ? "font-bold" : ""}`
                }
                end
              >
                Início
              </NavLink>
            </li>
            <li>
              <a
                href="https://app.powerbi.com/view?r=eyJrIjoiMDJjNTU5MmItMGNkNy00MmQwLTgwZTktM2Y3ZjA5YTNlMGYwIiwidCI6IjE1ZGNkOTA5LThkYzAtNDBlOS1hMWU1LWNlY2IwNTNjZGQxYSJ9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#020080] text-lg"
              >
                Abrigos
              </a>
            </li>
            <li>
              <NavLink
                to="/doar"
                className={({ isActive }) =>
                  `text-[#020080] text-lg ${isActive ? "font-bold" : ""}`
                }
                end
              >
                Doar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apoiadores"
                className={({ isActive }) =>
                  `text-[#020080] text-lg ${isActive ? "font-bold" : ""}`
                }
                end
              >
                Apoiadores
              </NavLink>
            </li>

            {/* Login / Logout Links */}
            {IsLoggedIn ? (
              <li>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 text-[#020080] hover:text-blue-700"
                >
                  <span>Sair</span>
                  <img src={arrowLeft} alt="arrow left" className="w-4 h-4" />
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="flex items-center gap-2">
                  <img src={user} alt="user" className="w-6 h-6" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* MENU ITEMS (Mobile) */}
      <MobileNavbar isMenuOpen={isMenuOpen} IsLoggedIn={IsLoggedIn}/>
    </header>
  );
}

export default Navbar;
