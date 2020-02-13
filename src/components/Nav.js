import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../utils/useWindowSize';
import { sections } from '../config/CMSFetch.json';
import { colours } from '../config/globalStyles.json';


function Nav () {

    const [ width ] = useWindowSize();

    const Nav = styled.nav`
        display: flex;
        align-items: center;
        justify-content: right;
        margin-left: auto;
    `
    const NavItemList = styled.ul`
        display: grid;
        grid-auto-flow: column;
        grid-gap: 20px;
    `

    const NavItem = styled.li`
        color: ${colours.light};
        text-transform: capitalize;
    `

    const Link = styled.a`
    `

    const Hamburger = styled.img`
        --max-size: 20;
        --min-size: 15;
        width: var(--responsive);

        height: var(--responsive);
        fill: ${colours.light};
    `

    const NavItems = (
        <NavItemList>
            {Object.keys(sections).map((name , idx) => (
                <NavItem key={idx}><Link>{name}</Link></NavItem>
            ))}
        </NavItemList>
    )

    return (
        <> 
            <Nav>
                {width > 600 ? NavItems : <Hamburger src={require('../assets/HamburgerMenu.svg')} alt="Mobile menu expand button."/>} 
            </Nav>
        </>
    )
}

export default Nav;