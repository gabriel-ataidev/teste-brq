import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    return(
        <nav className="navbar">
            <NavLink className="brand" to="/">cadastro de usuários</NavLink>
            <ul className="pages_list">
                <li><NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>Cadastro</NavLink></li>
                <li><NavLink to="/consulta" className={({isActive}) => (isActive ? "active" : "")}>Consulta</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;