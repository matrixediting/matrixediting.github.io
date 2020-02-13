import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { colours } from '../config/globalStyles.json';

function Header () {

    const Bar = styled.header`
        background-color: ${colours.dark};
        border-bottom: 1px solid ${colours.accent};
       
        
    `
    const Logo = styled.img`
        
        --min-size: 15;
        --max-size: 25;
        width: var(--responsive);
        margin-right: 5px;
        fill: ${colours.light};
    `
    const Title = styled.h1`
        color: ${colours.light};
    `
    const Container = styled.div`
        max-width: 1080px;
        margin: 0 auto;
        padding: 10rem 15rem;
        display: flex;
        align-items: center;
    `
    return (
        <Bar>
            <Container>
                <Logo src={require('../assets/TickMark.svg')} alt="Tick mark in box. Company logo."/>
                <Title>MatrixEditing</Title>
                {/* <Nav/> */}
            </Container>
        </Bar>
    )
}

export default Header;