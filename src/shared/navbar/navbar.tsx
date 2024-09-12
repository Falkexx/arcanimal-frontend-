import { secureHeapUsed } from "crypto";
import logo from "../../assets/img/logo.png"
import user from "../../assets/icons/User.svg"
import arrowLeft from "../../assets/icons/arrow-left.svg"
import { Link, NavLink } from "react-router-dom";
import './navbar.scss'

function Navbar() {
    const IsLoggedIn = false;
    
    function logout() {
        
    }

    return (
        <header className="Header px-custom-x py-[21px] flex justify-between items-center bg-white py-4 z-10 shadow-sm">
            <nav className="flex justify-between w-full px-4">

                {/* LOGO */}
                <section className="flex gap-2 items-center">
                    <Link to="/">
                        <img className="w-[170px] cursor-pointer" src={logo} alt="" />
                    </Link>
                </section>

                {/* MOBILE MENU BUTTON */}




                {/* NAVBAR */}
                <div className="block lg:flex lg:ml-20 mt-3 lg:mt-0">
                    <section className="flex flex-col md:flex-row justify-end gap-3 flex-grow">
                            <ul className="flex gap-5">
                                <li className="flex items-center">
                                    <NavLink to="/" className={({ isActive }) => `text-primary cursor-pointer text-lg ${isActive ? 'active' : ''}`} end
                                    >
                                        <a className="text--custom text-blue-500 text-base  hover:text-blue-700 cursor-pointer text-lg">Início</a>
                                    </NavLink>
                                </li>
                                <li className="flex items-center">
                                    <a className="text--custom text-blue-500 text-base hover:text-blue-700 cursor-pointer text-lg" target="_blank" 
                                    href="https://app.powerbi.com/view?r=eyJrIjoiMDJjNTU5MmItMGNkNy00MmQwLTgwZTktM2Y3ZjA5YTNlMGYwIiwidCI6IjE1ZGNkOTA5LThkYzAtNDBlOS1hMWU1LWNlY2IwNTNjZGQxYSJ9">
                                        Abrigos
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <NavLink to="/doar" className={({ isActive }) => `text-primary cursor-pointer text-lg ${isActive ? 'active' : ''}`} end
                                    >
                                        <a className="text--custom text-blue-500 text-base hover:text-blue-700 cursor-pointer text-lg">Doar</a>
                                    </NavLink>
                                </li>
                                <li className="flex items-center">
                                    <NavLink to="/apoiadores" className={({ isActive }) => `text-primary cursor-pointer text-lg ${isActive ? 'active' : ''}`} end
                                    >
                                        <a className="text--custom text-blue-500 text-base hover:text-blue-700 cursor-pointer text-lg">Apoiadores</a>
                                    </NavLink>
                                </li>

                                {/* RENDERIZACAO PARA CASO ESTEJA LOGADO OU NAO */}

                                {IsLoggedIn ? (
                                    <section className="flex justify-end flex-grow">
                                        <a onClick={logout} className="flex gap-3 items-center cursor-pointer">
                                            <p className="">Sair</p>
                                            <img src={arrowLeft} alt="arrow left" />
                                        </a>
                                    </section>
                                ) : (
                                    <li className="flex items-center">
                                        <Link className="h-[24px]" to="/login">
                                            <a className="flex items-center items-center cursor-pointer">
                                                <img src={user} alt="user" />
                                            </a>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                            
                        </section>
                </div>
            </nav>
        </header>
        
    )
}

export default Navbar