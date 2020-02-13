import React from 'react';
import styled from 'styled-components';

function Section ({ title, image, children }) {

    const Section = styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const Image = styled.img`
        width: 100%;
        max-width: 60%;
        height : 10em;
        margin-bottom: 1em;
    `
    const Title = styled.h2`
        text-align: center;
        margin-bottom: 1em;
        font-weight: 700;
    `
    

    return (
        <Section>
            {image ? <Image src={require(`../assets/${image}`)}/> : null}
            {title ? <Title>{title}</Title> : null}
            {children}
        </Section>
    )
}

export default Section;