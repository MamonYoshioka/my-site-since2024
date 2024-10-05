import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
    return (
        <header>
                <div className='logo'>
                        <h3>Mon Site</h3>
                </div>
                <nav>
                        <ul>
                                <li>
                                        <Link to="/">Top</Link>
                                </li>
                                <li>
                                        <Link to="/sns">SNS</Link>
                                </li>
                        </ul>
                </nav>
        </header>
    )
}

export default Header