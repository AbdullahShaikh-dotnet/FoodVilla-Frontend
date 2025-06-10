import { LOGO_URL } from "../utils/constant";

const Header = () => (
    <div className="heading">
        <div className="logo-container">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li className="nav-items-active">Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;