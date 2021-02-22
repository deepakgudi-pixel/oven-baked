import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './navbarelements';


const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
            <NavLink to='/'>Oven-Baked</NavLink>
            <NavIcon onClick={toggle}>
                <Bars />
            </NavIcon>
          </Nav>
          
            
        </>
    );
}

export default Navbar;
