import React from 'react';
import styled from 'styled-components';
import Section from './Section.js';
import { sections } from '../config/CMSFetch.json';
import { colours } from '../config/globalStyles.json';

function Services () {

    const ServiceList = styled.ul`
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media (max-width: 650px){
            grid-template-columns: 1fr;
        }
        justify-items: flex-start;
        grid-gap: 60rem;
    `

    const Service = styled.li`
        border-radius: 5rem;
    `

    const Header = styled.div`
        position: relative;
        display: grid;
        grid-auto-flow: column;
        margin-bottom: 20rem;
    `
    const Text = styled.div`
        width: 65%;
    `
    const Name = styled.h3`
        font-weight: 800;
        margin-bottom: 10rem;
    `

    const Price = styled.h4`
        font-weight: 500;
    `

    const Image = styled.img`
        position: absolute;
        right: 0px;
        max-width: 35%;
        height: 100%;
    `

    const Description = styled.p`
        text-align: justify;
        text-justify: inter-word;
        text-align-last: left;
    `

    return (
        <Section > {/*title="Services" image="undraw_professor_8lrt.svg"*/}
            <ServiceList>
                {sections.services.map(({ name, price, description, image, alt }, idx) => (
                    <Service key={idx}>
                        <Header>
                            <Text>
                                <Name>{name}</Name>
                                <Price>{price}</Price>
                            </Text>
                            <Image src={require(`../assets/${image}`)} alt={alt} />
                        </Header>
                        <Description>{description}</Description>
                    </Service>
                ))}
            </ServiceList>
        </Section>
    )
}

export default Services;