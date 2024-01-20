import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
        <nav>
            <ul className='nav-lista'>
                <p className='f'>Foja Zero</p>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Inico</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Tienda</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Quienes Somos</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Uniformes</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Contacto</a>
                </li>
            </ul>
        </nav>
  )
}

export default Nav