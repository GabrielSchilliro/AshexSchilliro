import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='menu-bar'>
            <div>
                <Link to={'/'} className="brand">Ashex</Link>
            </div>
            <div className='menu'>
                <ul className='menu-list'>
                    <li className='menu-item'><Link to={'/'} className='menu-link'>Inicio</Link></li>
                    <li className='menu-item'>
                        <Link to={'/'} className='menu-link menu-desp'>Productos</Link>
                        <ul className='submenu'>
                            <Link to={'category/jordan1'} className="submenu-link"><li>Jordan 1</li></Link>
                            <Link to={'category/jordan11'} className="submenu-link"><li>Jordan 11</li></Link>
                        </ul>
                    </li>
                    <li className='menu-item'><Link to={'/'} className='menu-link'>Contacto</Link></li>
                </ul>
            </div>
            <div>
                <Link to={'/cart'}><CartWidget/></Link>
            </div>

        </div>
    )
}

export default NavBar