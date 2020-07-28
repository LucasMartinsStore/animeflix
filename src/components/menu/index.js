import React from 'react';
import Logo from '../../assets/image/logo.png';
import './Menu.css';
import Button from '../Button/index';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className ="Menu">
            <a href="/">
            <img  className="Logo" src = {Logo} alt="Animeflix Logo"/>                
            </a>

            <Button as="a" className="ButtonLink" href="/">
                New Video
            </Button>
        </nav>
    ) 
}

export default Menu;