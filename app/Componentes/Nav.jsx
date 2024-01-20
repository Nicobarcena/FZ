"use client";
import Link from 'next/link';
import React from 'react'
import "./Nav.css"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <nav className='nav-lista'>
    <p>Foja Zero</p>
      <ul  className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link href="/">Inico</Link>
        </li>
        <li>
          <Link href="./tienda">Tienda</Link>
        </li>
        <li>
          <Link href="./quienesomos">Quienes Somos</Link>
        </li>
        <li>
          <Link href="./uniforme">Uniformes</Link>
        </li>
        <li>
          <Link href="./contacto">Contacto</Link>
        </li>
      </ul>
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FontAwesomeIcon icon={faX}   /> : <FontAwesomeIcon  icon={faBars} />}
      </button>
    </nav>
  )
}

export default Nav;