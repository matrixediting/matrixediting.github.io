import React from 'react';
import styled from 'styled-components';

function Footer () {

    const Footer = styled.footer`
        display: grid;
        justify-content: center;
        grid-gap: 1em;
        align-items: center;
        text-align: center;
        padding: 1em;
        margin: 3em 0;
    `;

    const Copyright = styled.p``

    const MadeBy = styled.p`
        font-weight: light;
        --max-size: 12;
        --min-size: 9;
        font-size: var(--responsive);
    `;

    return (
        <Footer>
            <Copyright>© MatrixEditing {new Date().getFullYear()}</Copyright>
            <MadeBy>Made by Aidan Keay</MadeBy>
        </Footer>
    )
}

export default Footer;