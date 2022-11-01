import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";

import Logo from "../img/Logo.png";

import "./Nav.css";

const Nav = () => {
    
    let location = useLocation();

    if (location.pathname !== "/") {
        return <Link className="nav" to="/"><img src={Logo} alt="beer logo"/></Link>;
    }
}
 
export default Nav;