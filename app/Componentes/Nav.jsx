import Link from 'next/link'
import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
        <nav>
            <ul className='nav-lista'>
                <p className='f'>Foja Zero</p>
                <li className='nav-item'>
                    <Link href="./" className='nav-link'>Inico</Link>
                </li>
                <li className='nav-item'>
                    <Link href="./tienda" className='nav-link'>Tienda</Link>
                </li>
                <li className='nav-item'>
                    <Link href="./quienesomos" className='nav-link'>Quienes Somos</Link>
                </li>
                <li className='nav-item'>
                    <Link href="./uniforme" className='nav-link'>Uniformes</Link>
                </li>
                <li className='nav-item'>
                    <Link href="contacto" className='nav-link'>Contacto</Link>
                </li>
            </ul>
        </nav>
  )
}

export default Nav