import { NavLink } from "react-router-dom";
import Logo from "../assets/sportsee.svg";

const Header = () => {
    return (
        <nav className="sportsee-header">
            <NavLink to="/" className="sportsee-header__logo">
                <img src={Logo} alt="sportsee" />
            </NavLink>

            <div className="sportsee-header__items">
                <NavLink to="/" className="sportsee-header__item">Accueil</NavLink>
                <NavLink to="#" className="sportsee-header__item">Profil</NavLink>
                <NavLink to="#" className="sportsee-header__item">Réglages</NavLink>
                <NavLink to="#" className="sportsee-header__item">Communauté</NavLink>
            </div>
        </nav>
    );
};

export default Header;