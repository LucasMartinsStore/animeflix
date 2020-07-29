import React from 'react';
import {Link} from 'react-router-dom' ;
import Logo from '../../assets/image/logo.png';
import './Menu.css';
import Button from '../Button/index';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className ="Menu">
            <Link to="/">
            <img  className="Logo" src = {Logo} alt="Animeflix Logo"/>                
            </Link>

            <Button as={Link} className="ButtonLink" to="register/video">
                New Video
            </Button>
        </nav>
    ) 
}

export default Menu;