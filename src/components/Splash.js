import React from 'react';
import styled from 'styled-components';
import { colours, fontSizes } from '../config/globalStyles.json';
import { splash } from '../config/CMSFetch.json';

function Splash () {

    const Container = styled.section`
        margin-top: 2em;
        position: relative;
        display: grid;
        grid-template-columns: 3fr 2fr 5%;
        align-items:center;
        justify-content: stretch;
        @media(max-width: 650px){
            margin-top: 1em;
            align-items: flex-start;
            grid-template-columns: 1fr;
        }
    `

    const Message = styled.div`
        padding-right: 20px;
    `

    const Title = styled.h2`
        font-weight: 700;
        margin-bottom: 0.5em;
        
    `

    const Subtitle = styled.h3`
        font-weight: 400;
    `

    const Image = styled.img`
        height: 100%;
        width: 100%;
        padding: 0 2em;
        @media(max-width: 650px){
            display: none;
        }
    `
    const Arrow = styled.img`
        margin-top: 3em;
        width: 100%;
        height: 25px;
    `

    return (
        <Container>
            <Message>
                <Title>{splash.title}</Title>
                <Subtitle>{splash.subtitle}</Subtitle>
            </Message>
            <Image src={require('../assets/undraw_voice_interface_eckp.svg')} alt="Woman studying."/>
            {/* <Arrow src={require('../assets/ExpandArrowDown.svg')} alt="Arrow pointing down."/> */}
        </Container>
    )
}

export default Splash;