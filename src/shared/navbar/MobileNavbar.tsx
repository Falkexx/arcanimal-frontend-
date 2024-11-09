import { Link, NavLink } from "react-router-dom";
import user from "../../assets/icons/User.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";

function logout() {
  console.log("Ainda não estou concluida! :(");
}

export function MobileNavbar({
  isMenuOpen,
  IsLoggedIn,
}: {
  isMenuOpen: boolean;
  IsLoggedIn: boolean;
}) {
  return (
    <nav>
      <div
        className={`${
          isMenuOpen ? "h-auto py-4" : "h-0"
        } lg:hidden transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <ul className="flex flex-col items-start gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-blue-950 text-lg ${isActive ? "font-bold" : ""}`
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
              className="text-[#020080] text-lg hover:text-blue-950 BaseFont"
            >
              Abrigos
            </a>
          </li>
          <li>
            <NavLink
              to="/doar"
              className={({ isActive }) =>
                `text-[#020080] text-lg BaseFont ${isActive ? "font-bold" : ""}`
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
                `text-[#020080] text-lg BaseFont ${isActive ? "font-bold" : ""}`
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
                className="flex items-center gap-2 text-[#020080] BaseFont hover:text-blue-700"
              >
                <span>Sair</span>
                <img src={arrowLeft} alt="arrow left" className="w-4 h-4" />
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="flex items-center gap-2">
                <img src={user} alt="user" className="w-6 h-6" />
                <span className="text-[#020080] BaseFont hover:text-blue-700">
                  Entrar
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
